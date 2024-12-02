import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-1/6 vh flex gap-[10px] justify-center items-center pt-[40px] pb-[40px]">
      <div className="flex justify-center items-center" id="bgAccount">
        <Image
          className="rounded-full"
          width={600}
          height={400}
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*v5MGm5V9R_p2c8oCf4av7A.png"
          alt="Avatar"
        />
      </div>
      <h1 className="text-3xl font-bold w-[300px] md:w-auto lg:w-auto text-black font-preahvihear">
        Hello! My name is Arry,
        <br />
        I`m a Fullstack Developer
      </h1>
    </div>
  );
}
