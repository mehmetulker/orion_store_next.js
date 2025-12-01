import React from "react";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  ShoppingCartSimpleIcon,
  UserIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function IconsGroup() {
  return (
    <div className="flex items-center gap-6 ">
      <Button
        type="button"
        variant="ghost"
        className="relative h-auto min-h-0 w-auto min-w-0 p-0 px-0 py-0 has-[>svg]:px-0 text-white hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        aria-label="Shopping cart"
      >
        <ShoppingCartSimpleIcon size={32} className="size-8 text-current" />
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white body-tiny-600  text-secondary-700">
          3
        </span>
      </Button>
      <Button
        type="button"
        variant="ghost"
        className="h-auto min-h-0 w-auto min-w-0 p-0 px-0 py-0 has-[>svg]:px-0 text-white hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        aria-label="User account"
      >
        <UserIcon size={32} className="size-8 text-current" />
      </Button>
      <Button
        type="button"
        variant="ghost"
        className="h-auto min-h-0 w-auto min-w-0 p-0 px-0 py-0 has-[>svg]:px-0 text-white hover:bg-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        aria-label="Wishlist"
      >
        <HeartIcon size={32} className="size-8 text-current" />
      </Button>
    </div>
  );
}
