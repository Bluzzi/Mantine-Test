type Theme = "dark" | "light";

export type ThemeStore = {
  value: Theme;

  set: (value: Theme) => void;
  toggle: () => void;
}