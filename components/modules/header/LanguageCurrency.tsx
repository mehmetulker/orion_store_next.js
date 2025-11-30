import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function LanguageCurrency() {
  const switchLocale = (val: string) => {
    return "test";
  };
  const switchCurrency = (val: string) => {
    return "test";
  };
  return (
    <div className="flex items-center justify-center">
      <Select onValueChange={(val) => switchLocale(val)}>
        <SelectTrigger className="w-[100px] text-white border-none bg-transparent border-0 focus-visible:ring-0  focus:ring-offset-0">
          <SelectValue
            placeholder={<span className="text-white">English</span>}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eng" className="text-white">
            <div className="flex items-center justify-center gap-4 capitalize">
              <Image
                src="/united-kingdom.png"
                alt="flag"
                width={20}
                height={20}
              />
              eng
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(val) => switchCurrency(val)}>
        <SelectTrigger className="w-[100px] text-white border-none bg-transparent border-0 focus-visible:ring-0  focus:ring-offset-0">
          <SelectValue placeholder={<span className="text-white">Usd</span>} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd" className="text-white">
            <div className="flex items-center justify-center gap-4 capitalize">
              usd
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
