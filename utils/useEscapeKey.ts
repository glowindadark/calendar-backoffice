import { useEffect } from 'react';

const useEscapeKey = (onEscape: () => void) => {
  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape' || evt.keyCode === 27) {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEscape]);
};

export default useEscapeKey;
