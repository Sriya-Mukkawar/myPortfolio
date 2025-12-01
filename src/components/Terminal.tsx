import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';
import { useTab } from '../contexts/TabContext';

const TerminalComponent = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { activeTab, setActiveTab } = useTab();
  const [commandHistory, setCommandHistory] = useState<Array<{ command: string; output: string }>>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [currentPath, setCurrentPath] = useState('~');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Sync path with active tab
  useEffect(() => {
    if (activeTab === 'sriya.info') {
      setCurrentPath('sriya.info');
    } else if (activeTab === 'work.done') {
      setCurrentPath('work.done');
    } else if (activeTab === 'blog.share') {
      setCurrentPath('blog.share');
    } else if (activeTab === 'type.fun') {
      setCurrentPath('type.fun');
    }
  }, [activeTab]);

  // Reset when terminal opens
  useEffect(() => {
    if (isOpen) {
      setCommandHistory([]);
      setCurrentCommand('');
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const parts = trimmedCmd.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    if (command === 'cd') {
      if (args.length === 0 || args[0] === '~') {
        setCurrentPath('~');
        return 'Changed directory to home';
      }
      
      const target = args[0];
      if (target === 'work.done' || target === 'blog.share' || target === 'sriya.info' || target === 'type.fun') {
        setCurrentPath(target);
        // Map to tab names
        if (target === 'work.done') {
          setActiveTab('work.done');
        } else if (target === 'blog.share') {
          setActiveTab('blog.share');
        } else if (target === 'sriya.info') {
          setActiveTab('sriya.info');
        } else if (target === 'type.fun') {
          setActiveTab('type.fun');
        }
        // Close terminal after navigation
        setTimeout(() => {
          onClose();
        }, 500);
        return `Changed directory to ${target}`;
      } else {
        return `cd: no such directory: ${target}. Available directories: work.done, blog.share, sriya.info, type.fun`;
      }
    } else if (command === 'clear') {
      setCommandHistory([]);
      return '';
    } else if (command === 'help') {
      return `Available commands:
  cd <directory>  - Change directory (work.done, blog.share, sriya.info, type.fun)
  clear           - Clear terminal
  help            - Show this help message`;
    } else if (trimmedCmd === '') {
      return '';
    } else {
      return `Command not found: ${command}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCommand.trim()) return;

    const output = executeCommand(currentCommand);
    
    setCommandHistory(prev => [
      ...prev,
      {
        command: currentCommand,
        output: output,
      },
    ]);

    setCurrentCommand('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[100]"
          />
          
          {/* Terminal Bottom Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[101] bg-gray-900 border-t-2 border-blue-500"
            style={{ height: '50vh', maxHeight: '500px' }}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-mono">Terminal</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              className="h-[calc(100%-120px)] overflow-y-auto p-4 font-mono text-sm"
            >
              <div className="text-blue-400 mb-2">
                Welcome to the terminal. Type 'help' for available commands.
              </div>
              
              {commandHistory.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="text-green-400">
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">@</span>
                    <span className="text-white">portfolio</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-blue-400">{currentPath}</span>
                    <span className="text-gray-500">$</span>
                    <span className="text-white ml-1">{item.command}</span>
                  </div>
                  {item.output && (
                    <div className="text-gray-300 ml-2 mt-1">{item.output}</div>
                  )}
                </div>
              ))}

              {/* Current Input Line */}
              <form onSubmit={handleSubmit} className="flex items-center">
                <span className="text-green-400">
                  <span className="text-blue-400">~</span>
                  <span className="text-gray-400">@</span>
                  <span className="text-white">portfolio</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">{currentPath}</span>
                  <span className="text-gray-500">$</span>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  className="flex-1 bg-transparent text-white outline-none ml-2"
                  placeholder="Type a command..."
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TerminalComponent;

