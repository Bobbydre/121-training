import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/component/Hero/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
    <Hero />
    </main>
  )
}
