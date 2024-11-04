import {useState} from 'react'
import { FaTrashCan } from "react-icons/fa6";

function Items(props) {

  const [done,setDone]=useState(false)
    return (
        <>
           <div onClick={()=> setDone(!done)} className="w-full border-b p-3 flex justify-between">
               <div>
                 <span className='pr-4 text-[12px]'>
                   {props.time}
                 </span>
                 <span className={` ${done === true ? "line-through" : ""} cursor-pointer text-[20px]`}>
                   {props.item}
                 </span>
               </div>
               <div className='pr-5 cursor-pointer' onClick={()=> props.removeHandler(props.id)}>
               <FaTrashCan  />
               </div>
           </div>
        </>
    )
}

export default Items
