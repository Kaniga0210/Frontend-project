import { useState, useEffect } from "react";

function UseTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log("Theme changed to:", theme);

    if (theme === "light") {
        
    }
  }, [theme]);

function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log("theme", theme);
}


  return { theme, toggleTheme };
}

export default UseTheme;
