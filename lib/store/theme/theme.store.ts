import create from "zustand";
import { ThemeStore } from "./theme.type";

export const useThemeStore = create<ThemeStore>(set => ({
  value: "dark",

  set: value => set({ value: value }),
  toggle: () => set(state => ({ value: state.value === "dark" ? "light" : "dark" }))
}));