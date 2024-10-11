import Header from "@/components/Header";
import Main from "@/pages/Main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center flex-nowrap">
      <Header/>
      <Main/>
    </div>
  );
}
