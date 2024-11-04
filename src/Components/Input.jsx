import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa6";
function Input( props) {
  const inputRef = useRef()
  return (
    <>
      <div className='flex justify-around p-4'>
        <input type="text" placeholder='Enter data here!' className='p-4 bg-white w-[90%] text-black border border-slate-400 focus:outline-none' ref={inputRef} />
        <div>
          <button  className=' w-[50px] h-[50px] bg-[#e74c3c] text-white text-2xl rounded-[50%]  flex justify-center items-center cursor-pointer' onClick={()=> {
             props.handler(inputRef.current.value)
            inputRef.current.value="";
          }}>
            <FaPlus /> 
          </button>
        </div>
      </div>
    </>
  )
}

export default Input
