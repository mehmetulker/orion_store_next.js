"use client";

import { Menu } from "lucide-react";
import SocialMenu from "./SocialMenu";
import MainMenu from "./MainMenu";
import Menus from "./Menus";

export default function Header() {
  return (
    <div className="bg-secondary-700 w-full">
      <SocialMenu />
      <MainMenu />
      <Menus />
    </div>
  );
}
