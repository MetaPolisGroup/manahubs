"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { Icons } from "./Icons";
import { useTheme } from "next-themes";

const ThemeModeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeThemeModeHandler = () => {
    if (localStorage.theme === "dark") return setTheme("light");
    if (localStorage.theme === "light") return setTheme("dark");
    setTheme("light");
  };

  return (
    <Button
      className="bg-white group hover:bg-gray-400 hover:ring-gray-400 focus:ring-offset-0 focus:ring-slate-50 focus:ring-inset active:ring-offset-0"
      onClick={changeThemeModeHandler}
    >
      <Icons.Sun className="text-black group-hover:text-white" />
    </Button>
  );
};

export default ThemeModeBtn;
