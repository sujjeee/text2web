import React from 'react'
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const Hero = () => {
    return (
        <div className='flex flex-1 w-full flex-col items-center justify-center text-center px-4  mt-10 background-gradient sm:py-16 py-9' >
            <div className="mb-12 flex sm:justify-center z-1">
                <Link
                    href="https://twitter.com/sujjeeee"
                    className="text-zinc-400 relative overflow-hidden rounded-lg py-2 px-6 text-sm leading-6 ring-1 ring-zinc-100/10 hover:ring-zinc-100/30 tracking-wide duration-150 flex items-center gap-2"
                >
                    <AiFillGithub size={20} />
                    <p className="text-sm">Star on GitHub</p>
                </Link>
            </div>
            <h1 className="mx-auto max-w-6xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-6xl  text-[45px]  text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white leading-[48px] sm:leading-none">
                Create Websites from Text.
            </h1>
            <h2 className="mx-auto mt-6 max-w-[320px] sm:max-w-lg text-base sm:text-2xl  sm:text-gray-400  text-gray-500 ">
                Describe your website and design needs and AI will generate a website for you.
            </h2>
        </div >
    )
}

export default Hero