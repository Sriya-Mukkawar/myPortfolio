import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, FileText, Trash2, Save, X, FileCode } from 'lucide-react';

interface FileData {
  id: string;
  name: string;
  content: string;
  createdAt: number;
  updatedAt: number;
}

const FunShare = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  const [selectedFile, setSelectedFile] = useState<FileData | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [editingName, setEditingName] = useState('');

  // Load files from localStorage on mount
  useEffect(() => {
    const savedFiles = localStorage.getItem('funShareFiles');
    if (savedFiles) {
      try {
        const parsedFiles = JSON.parse(savedFiles);
        setFiles(parsedFiles);
      } catch (error) {
        console.error('Error loading files:', error);
      }
    }
  }, []);

  // Save files to localStorage whenever files change
  useEffect(() => {
    if (files.length > 0) {
      localStorage.setItem('funShareFiles', JSON.stringify(files));
    }
  }, [files]);

  // Generate random file name with .fun extension
  const generateRandomFileName = (): string => {
    const names = ['idea', 'thought', 'note', 'draft', 'code', 'script', 'memo', 'project', 'snippet', 'story', 'dream', 'plan'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomNum = Math.floor(Math.random() * 1000);
    return `${randomName}${randomNum}.fun`;
  };

  // Get preview of content (first few lines)
  const getContentPreview = (content: string, maxLength: number = 150): string => {
    if (!content || content.trim() === '') return 'Empty file';
    const trimmed = content.trim();
    if (trimmed.length <= maxLength) return trimmed;
    return trimmed.substring(0, maxLength) + '...';
  };

  // Create new file
  const createNewFile = () => {
    const fileName = generateRandomFileName();
    const newFile: FileData = {
      id: Date.now().toString(),
      name: fileName,
      content: `// Welcome to ${fileName}!\n// Write your code or notes here...\n\n`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    setFiles([...files, newFile]);
    setSelectedFile(newFile);
    setEditingContent(newFile.content);
    setIsEditingName(false);
  };

  // Save file
  const saveFile = () => {
    if (!selectedFile) return;

    const updatedFiles = files.map((file) =>
      file.id === selectedFile.id
        ? { ...file, content: editingContent, updatedAt: Date.now() }
        : file
    );
    setFiles(updatedFiles);
    setSelectedFile({ ...selectedFile, content: editingContent, updatedAt: Date.now() });
  };

  // Save file and close editor
  const saveAndClose = () => {
    saveFile();
    // Close editor after saving to show cards view
    setSelectedFile(null);
    setEditingContent('');
    setIsEditingName(false);
  };

  // Close editor (saves before closing)
  const closeEditor = () => {
    // Save changes before closing
    if (selectedFile) {
      saveFile();
    }
    setSelectedFile(null);
    setEditingContent('');
    setIsEditingName(false);
  };

  // Delete file
  const deleteFile = (fileId: string) => {
    const updatedFiles = files.filter((file) => file.id !== fileId);
    setFiles(updatedFiles);
    if (selectedFile?.id === fileId) {
      setSelectedFile(null);
      setEditingContent('');
    }
  };

  // Select file
  const selectFile = (file: FileData) => {
    setSelectedFile(file);
    setEditingContent(file.content);
    setIsEditingName(false);
  };

  // Rename file
  const renameFile = () => {
    if (!selectedFile || !editingName.trim()) return;

    // Ensure .fun extension
    let newName = editingName.trim();
    if (!newName.endsWith('.fun')) {
      newName = newName + '.fun';
    }

    const updatedFiles = files.map((file) =>
      file.id === selectedFile.id
        ? { ...file, name: newName, updatedAt: Date.now() }
        : file
    );
    setFiles(updatedFiles);
    setSelectedFile({ ...selectedFile, name: newName, updatedAt: Date.now() });
    setIsEditingName(false);
  };

  // Format date
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-2">Create & Share Files</h2>
            <p className="text-gray-600">
              Create random files with .fun extension, write content, and save them. Files are stored locally in your browser.
            </p>
          </div>
          <button
            onClick={createNewFile}
            className="flex items-center gap-2 px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition font-mono"
          >
            <Plus className="w-5 h-5" />
            New File
          </button>
        </div>
      </motion.div>

      {/* File Cards Grid */}
      {selectedFile ? (
        <div className="mb-6">
          <div className="border border-purple-200 rounded-lg bg-white h-full flex flex-col shadow-sm">
            {/* Editor Header */}
            <div className="border-b border-purple-200 p-4 bg-purple-50 rounded-t-lg">
              <div className="flex items-center justify-between mb-2">
                {isEditingName ? (
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="text"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      onBlur={renameFile}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') renameFile();
                        if (e.key === 'Escape') {
                          setIsEditingName(false);
                          setEditingName(selectedFile.name);
                        }
                      }}
                      className="flex-1 px-3 py-2 border border-purple-300 rounded font-mono text-sm bg-white"
                      autoFocus
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 flex-1">
                    <FileText className="w-5 h-5 text-purple-600" />
                    <h3
                      className="font-mono text-base font-semibold text-black cursor-pointer hover:text-purple-600 transition"
                      onDoubleClick={() => {
                        setEditingName(selectedFile.name);
                        setIsEditingName(true);
                      }}
                    >
                      {selectedFile.name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      (Double-click to rename)
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <button
                    onClick={saveAndClose}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition text-sm font-mono"
                  >
                    <Save className="w-4 h-4" />
                    Save & Close
                  </button>
                  <button
                    onClick={closeEditor}
                    className="p-2 text-gray-400 hover:text-gray-600 transition"
                    title="Close editor"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="text-xs text-gray-500 font-mono">
                Created: {formatDate(selectedFile.createdAt)} • 
                Last modified: {formatDate(selectedFile.updatedAt)}
              </div>
            </div>

            {/* Editor Content */}
            <div className="flex-1 p-6 overflow-auto">
              <textarea
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                className="w-full h-full font-mono text-sm text-black bg-transparent outline-none resize-none"
                placeholder="Start typing your content here..."
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      ) : null}

      {/* Notion-style Cards Grid - Show when editor is closed */}
      {!selectedFile && (
        <>
          {files.length === 0 ? (
            <div className="border border-purple-200 rounded-lg bg-purple-50 p-12 flex items-center justify-center" style={{ minHeight: '400px' }}>
              <div className="text-center">
                <FileCode className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-bold text-black mb-2">No Files Yet</h3>
                <p className="text-gray-600 mb-6">
                  Create your first .fun file to get started
                </p>
                <button
                  onClick={createNewFile}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition mx-auto font-mono"
                >
                  <Plus className="w-5 h-5" />
                  Create New File
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {files.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative border rounded-lg p-4 cursor-pointer transition-all duration-200 border-purple-200 bg-white hover:border-purple-400 hover:shadow-lg"
                  onClick={() => selectFile(file)}
                >
                  {/* Delete button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteFile(file.id);
                    }}
                    className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-red-600 transition opacity-0 group-hover:opacity-100 rounded"
                    title="Delete file"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {/* File icon and name */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-mono text-sm font-semibold text-black truncate">
                        {file.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content preview */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 line-clamp-3 font-mono">
                      {getContentPreview(file.content)}
                    </p>
                  </div>

                  {/* Footer with date */}
                  <div className="flex items-center justify-between pt-3 border-t border-purple-100">
                    <span className="text-xs text-gray-500">
                      {formatDate(file.updatedAt)}
                    </span>
                    <span className="text-xs text-purple-600 font-mono">.fun</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Show cards when editor is open - below editor */}
      {selectedFile && files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold text-black mb-4 font-mono">All Files</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {files.map((file, index) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group relative border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  selectedFile?.id === file.id
                    ? 'border-purple-500 bg-purple-50 shadow-md'
                    : 'border-purple-200 bg-white hover:border-purple-400 hover:shadow-lg opacity-60 hover:opacity-100'
                }`}
                onClick={() => selectFile(file)}
              >
                {/* Delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteFile(file.id);
                  }}
                  className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-red-600 transition opacity-0 group-hover:opacity-100 rounded"
                  title="Delete file"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                {/* File icon and name */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono text-sm font-semibold text-black truncate">
                      {file.name}
                    </h3>
                  </div>
                </div>

                {/* Content preview */}
                <div className="mb-3">
                  <p className="text-xs text-gray-600 line-clamp-3 font-mono">
                    {getContentPreview(file.content)}
                  </p>
                </div>

                {/* Footer with date */}
                <div className="flex items-center justify-between pt-3 border-t border-purple-100">
                  <span className="text-xs text-gray-500">
                    {formatDate(file.updatedAt)}
                  </span>
                  <span className="text-xs text-purple-600 font-mono">.fun</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FunShare;

