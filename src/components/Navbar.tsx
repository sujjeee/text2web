import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { ImKey } from 'react-icons/im'


const Navbar = ({ setIsModalOpen }: any) => {

    return (
        <nav className="flex px-4 items-center max-w-6xl mx-auto justify-between py-2 sm:py-4 relative text-white">
            <div className=" py-1 cursor-pointer text-xl sm:text-2xl  font-bold tracking-wider text-white ">
                <Link href="/" className='flex items-center justify-center gap-1.5 sm:gap-3 tracking-widest'>
                    Text2Web
                    <span className='border-2 border-green-500 font-normal px-3 py-1 text-xs rounded-md'>Beta</span>
                </Link>
            </div>
            <div className='flex font-semibold  tracking-wide items-center jus gap-5'>
                <div className=' flex gap-3'>
                    <ImKey
                        onClick={setIsModalOpen}
                        size={25}
                        className='p-1 cursor-pointer'
                        title="Set your API key" />
                    <Link
                        href="https://twitter.com/sujjeeee"
                        target="_blank">
                        <AiOutlineTwitter size={25} />
                    </Link>
                    <Link
                        href="https://github.com/sujjeee/text2web"
                        target="_blank">
                        <AiFillGithub size={25} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar