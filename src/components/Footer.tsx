import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-1 w-full flex-col items-center justify-center text-center px-4 background-gradient  py-9' >
            <h1 className="mx-auto max-w-4xl  tracking-normal text-gray-300 text-sm sm:text-xl text-zinc-100/50  ">
                <span className='text-red-700 font-medium'>Disclaimer</span>: This website is a fun project that uses OpenAI API to generate websites from text inputs. The websites are not meant to be professional or realistic, and may contain errors or inaccuracies. This website is open source and you are welcome to contribute and improve it.
            </h1>
        </div >
    )
}

export default Footer