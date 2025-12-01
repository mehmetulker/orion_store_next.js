import Logo from "@/components/custom/Logo";

import React from "react";
import SearchInput from "./SearchInput";
import IconsGroup from "./IconsGroup";

export default function MainMenu() {
  return (
    <div className="border-t border-white border-opacity-20">
      <div className="h-[88px] flex items-center justify-between container">
        <Logo />
        <SearchInput />
        <IconsGroup />
      </div>
    </div>
  );
}
