export type Theme = 'dark' | 'light';

export const getTheme = (): Theme => {
  const theme = localStorage.getItem('theme');

  if (theme) {
    return theme as Theme;
  }

  const { matches } = window.matchMedia('(prefers-color-scheme: dark)');

  return matches ? 'dark' : 'light';
};

export const setTheme = (el: HTMLElement, theme: Theme) => {
  el.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

export const handleThemeToggle = (initialTheme: Theme) => {
  const toggle = document.getElementById('theme-toggle');
  const htmlEl = document.querySelector('html');
  let theme: Theme = initialTheme === 'dark' ? 'dark' : 'light';

  if (!htmlEl) {
    return;
  }

  setTheme(htmlEl, theme);

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(htmlEl, theme);
  };

  toggle?.addEventListener('click', toggleTheme);
};
