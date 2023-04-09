import Link from 'next/link'
import React from 'react'

const MacWarp = ({ child }: any) => {
    return (
        <>
            <div className='max-w-6xl w-full justify-center items-center flex my-16'>
                <div className=" rounded-2xl bg-gray-300 overflow-hidden w-full mx-4">
                    <div className="h-12 bg-gray-800 relative flex justify-end items-center">
                        <div className="absolute top-4 left-4 h-auto -translate-y-1 sm:-translate-y-0.5">
                            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-rose-500 rounded-full inline-block mr-2"></span>
                            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full inline-block mr-2"></span>
                            <span className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full inline-block"></span>
                        </div>
                        <Link href="/editcode" target='_blank'>
                            <button className='border-2 px-4 py-1 mr-5 rounded-md text-white font-medium text-xs sm:text-sm'> Edit Code</button>
                        </Link>
                    </div>
                    <div>
                        {child}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MacWarp