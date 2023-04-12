import React, { useState } from 'react'
import { FaRobot } from 'react-icons/fa'

interface SearchBoxProps {
    onButtonClick: (inputValue: string) => void;
}
const SearchBox = ({ onButtonClick }: SearchBoxProps) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleClick = () => {
        onButtonClick(searchValue);
    };
    return (
        <>
            <div className='px-4 w-full justify-center items-center flex '>
                <div className='max-w-xl w-full '>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaRobot className="w-5 h-5 text-gray-500 " />
                        </div>
                        <input
                            type="text"
                            className="block w-full  p-4 pl-10 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 pr-28"
                            placeholder="create me a simple todo website..."
                            value={searchValue}
                            onChange={handleInputChange}
                            required />
                        <button
                            onClick={handleClick}
                            type="button"
                            className="text-white absolute right-2.5 bottom-2.5 bg-black hover:opacity-90 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">Generate</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchBox