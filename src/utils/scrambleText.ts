export const scrambleText = (text: string): string => {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      result += ' ';
    } else {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  
  return result;
};

export const unscrambleText = (originalText: string, currentText: string, progress: number): string => {
  let result = '';
  for (let i = 0; i < originalText.length; i++) {
    if (progress > i / originalText.length) {
      result += originalText[i];
    } else {
      result += currentText[i] || ' ';
    }
  }
  return result;
};

