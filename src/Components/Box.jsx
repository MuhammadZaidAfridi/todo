import React from 'react'
import Items from './Items'

function Box(props) {
   const items = props.data.map(
    (singleData,index)=>{
        return <Items key={index} id={index} removeHandler={props.removeHandler} item={singleData.item} time={singleData.time}/>
    }
   )
    
    return (
        <>
            <div className='p-3'>
                
               {items}
                   {/* <Items/>
                   <Items/>
                   <Items/> */}
                   {/* <Items /> */}
            </div>
        </>
    )
}

export default Box
