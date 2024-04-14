import React from 'react'
// import img from '../Assets/hero2.png'
export default function ColDesign({name,des,price}) {
  return (
    <div className='flex flex-col items-center gap-2 group w-64 '>
      <div className='rounded-full w-94 z-20'>
      <img className='object-center object-cover w-full group-hover:scale-[1.3] transition duration-300 easeinout ' src={`/images/${name}.png`} alt={{}} />
      </div>
      <div className="p-8 w-[12rem] bg-gradient-to-tr from-black/10 to-slate-200/20 backdrop-blur-sm border border-slate-200/70  shadow-lg rounded-[22px] z-10 group-hover:scale-[1.1] transition duration-300 easeinout">

        <h1 className='font-bold title-font text-[#015228] text-lg'>{name}</h1>
        <p className='opacity-60 text-sm text-white font-semibold'>{des}</p>
        <h1 className=' mt-1 font-bold text-lg title-font'>₹{price}</h1>
        </div>
    </div>
  )
}
