import { useEffect } from 'react';

export const useScrollToTop = (pathname, name = '') => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Safedash ${name && `| ${name}`}`;
  }, [pathname, name]);
};
