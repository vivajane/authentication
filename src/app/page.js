import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="">
        <Header />
      </header>
      <div className='w-full h-screen overflow-hidden'>
      <Image className='w-full' src="https://images.pexels.com/photos/5598283/pexels-photo-5598283.jpeg?auto=compress&cs=tinysrgb&w=920" alt="logo" width={400} height={200} layout='responsive' />
      </div>
    </div>
  );
}
