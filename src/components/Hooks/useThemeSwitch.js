"use client"
import { useState, useEffect } from "react";

export function useThemeSwitch() {
  // Use constants for your query and storage key
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const storageKey = "theme";

  // Create a function to toggle the theme
  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  // Initialize the mode based on user preference or media query
  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  const [mode, setMode] = useState(getUserPreference);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    // Initial setup
    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Update the theme when the mode changes
  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}