import Image from 'next/image'
import { Jost } from 'next/font/google'
import Hero from '@/component/Hero/Hero'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`font-jost flex min-h-screen flex-col items-center justify-center overflow-hidden`}
    >
    <Hero />
    </main>
  )
}
