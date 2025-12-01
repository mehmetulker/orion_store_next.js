import React from "react";
import SocialIcons from "./SocialIcons";
import LanguageCurrency from "./LanguageCurrency";
import { Separator } from "@/components/ui/separator";

export default function SocialMenu() {
  return (
    <div className="container h-[52px] flex items-center justify-between">
      <p className="body-small-400 text-white">
        Welcome to Orion online eCommerce store
      </p>
      <div className="flex items-center gap-4">
        <SocialIcons />
        <Separator
          orientation="vertical"
          className="bg-white/60 data-[orientation=vertical]:h-5"
        />
        <LanguageCurrency />
      </div>
    </div>
  );
}
