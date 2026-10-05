export function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark';
  const action = `Switch to ${dark ? 'light' : 'dark'} mode`;
  return <button type="button" class="theme-toggle" aria-label={action} title={action} onClick={onToggle}>
    <span aria-hidden="true">{dark ? '☀' : '☾'}</span>
    {dark ? 'Light mode' : 'Dark mode'}
  </button>;
}
