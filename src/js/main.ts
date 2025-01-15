import { getTheme, handleThemeToggle } from './theme';

const init = () => {
  const theme = getTheme();

  handleThemeToggle(theme);
};

document.addEventListener('DOMContentLoaded', init);
