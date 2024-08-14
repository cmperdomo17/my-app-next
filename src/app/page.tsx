import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ModeToggle } from "@/components/modeToggle/modeToggle";

export default function Home() {
  return (
    <>
      <ModeToggle /> {/* Put this component in the navbar */}
      <h1 className="text-xl font-bold">Welcome to</h1>
      <Image
        src="/next.svg"
        alt="Logo" width={200} height={200} 
        className="drop-shadow-effect"
      />
      <Link href={"/users"}>
        <Button>Users</Button>
      </Link>
    </>
  );
}
