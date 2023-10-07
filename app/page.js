import Navbar from "@/app/components/Navbar";
import { Pacifico } from "next/font/google";
import Link from "next/link";

const pacifico = Pacifico({ subsets: ['latin'], weight: "400" })


export default function Home() {
  return (
    <main>
        <div className="bg-[url('/header.webp')] bg-cover bg-zinc-500 bg-blend-multiply">
            <Navbar/>
            <div className="px-4 mx-auto max-w-screen-xl h-screen text-center py-24 lg:py-56 space-y-3">
                <h1 className={`${pacifico.className} text-4xl`}>Welcome to MinePot!</h1>
                <h1 className="text-6xl font-bold">Where hunger meets adventure.</h1>
            </div>
            <div className="bg-zinc-800 pt-5 px-10">
                <div>
                    <h1 className="text-4xl font-medium">Who are we?</h1>
                    <p>We are a restaurant chain that serves great and the best quality food in Minecraft!</p>
                </div>
                <div>
                    <h1 className="text-4xl font-medium">Want to eat?</h1>
                    <Link href="/menu" className="text-blue-500">Head to this page for the menu</Link>
                </div>
            </div>
        </div>
    </main>
  )
}
