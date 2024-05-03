import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src="/img.jpg" alt="Imagem" width={400} height={400} />
    </div>
  );
}
