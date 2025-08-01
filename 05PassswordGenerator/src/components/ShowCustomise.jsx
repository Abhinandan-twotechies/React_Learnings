import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../App';

function ShowCustomise() {
    const { data } = useContext(UserContext);

    return (
        <>
            <div className=' text-white bg-gray-600  h-20 items-center rounded-lg  w-201 mt-2'>
                <div className="p-1 text-black text-2xl text-center  rounded-tl-xl rounded-tr-xl bg-gray-400 ">
                    <h1>Customised Data</h1>
                </div>
                <div className='flex justify-evenly p-2'>
                    <p className='text-xl'>{`Performance Cookie : ${data.performance}`}</p>
                    <p className='text-lg'>{`Functional Cookie : ${data.functional}`}</p>
                    <p className='text-lg'>{`Targeted Cookie: ${data.targeted}`}</p>
                </div>
                {/* <div>
                    {data && data.length > 0 ? (data.map((item,idx)=>{
                        return <>
                           
                        </>
                    }) ): "Data Coming From Cookies"

                    }
                </div> */}
            </div>
        </>
    )
}

export default ShowCustomise



//   {data && data.length > 0 ? (
//     data.map((item, index) => (
//         <div key={index}>

//         </div>
//     ))
// ) :
//     (
//         "Data Coming"
//     )
// }