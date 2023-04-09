import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className='border-b border-[#333333] sticky top-0  backdrop-blur-3xl z-50'>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>

  )
}
