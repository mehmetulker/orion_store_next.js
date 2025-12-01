import React from "react";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="hidden lg:flex h-12 w-[646px]  items-center justify-center bg-white gap-2 px-5  py-3.5">
      <Input
        className="h-5 p-0 m-0 w-[578px] bg-white border-0 border-transparent outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus-visible:border-transparent focus:border-transparent focus-visible:shadow-none focus:shadow-none rounded-none shadow-none text-gray-900 placeholder:text-gray-500 body-small-400"
        type="search"
        placeholder="Search for anything..."
      />
      <Button className="h-5 w-5 px-0!  bg-white flex items-center justify-center cursor-pointer    border-0 outline-none ring-0 shadow-none hover:bg-white hover:text-gray-900 active:bg-white focus:ring-0 focus-visible:ring-0 focus:outline-none transition-none">
        <Search size={20} className="text-gray-900 text-2xl p-0" />
      </Button>
    </div>
  );
}
