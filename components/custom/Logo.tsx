import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={160} height={48} />
      </Link>
    </div>
  );
}
