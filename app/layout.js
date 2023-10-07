import './globals.css'
import './components/Navbar'
import { Exo_2 } from 'next/font/google'

const exo = Exo_2({ subsets: ['latin'] })

export const metadata = {
  title: {
      template: '%s - MinePot',
      default: 'MinePot'
  },
  description: 'Official MinePot Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
      <div className="sm:px-10 px-5 py-0.5 font-medium space-x-3 text-right">
        <a href="https://aircs.racing" className="transition duration-150 ease-out hover:ease-in md:hover:text-red-500">aircs.racing ↗</a>
        <a href="https://alee14.me" className="transition duration-150 ease-out hover:ease-in md:hover:text-green-500">alee14.me ↗</a>
      </div>
      {children}
      <footer className="flex flex-col text-center py-3 space-y-2 bg-zinc-800 text-light text-sm sm:text-base px-5 sm:px-0">
          <p>MinePot is a fictional restaurant made for the bits & Bytes Minecraft Server</p>
          <p>This website is proudly written using Next.JS and Tailwind CSS</p>
      </footer>
      </body>
    </html>
  )
}
