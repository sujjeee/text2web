import Modal from '@/components/Modal'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleKeyClick = () => {
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <header className='border-b border-[#333333] sticky top-0  backdrop-blur-3xl z-50'>
        <Navbar setIsModalOpen={handleKeyClick} />
      </header>
      <Component {...pageProps} />
      {showModal && <Modal setClose={handleCloseModal} />}
    </>

  )
}
