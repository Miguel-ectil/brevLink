import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
    </div>
  );
}
