import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <ProjectContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ProjectContext.Provider>
  );
};
