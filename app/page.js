import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <h1>My cool React Site</h1>
      <p>Hello</p>
      <p>Hello</p>
      <Link className="underline text-cyan-600" href="../page2/">Page 2</Link>
    </main>
  );
}
