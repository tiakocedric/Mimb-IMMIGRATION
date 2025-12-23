import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    applyTheme(initialTheme);
    setIsLoaded(true);
  }, []);

  const applyTheme = (themeToApply: Theme) => {
    const html = document.documentElement;
    if (themeToApply === 'light') {
      html.setAttribute('data-theme', 'light');
    } else {
      html.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', themeToApply);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  return { theme, toggleTheme, isLoaded };
}
