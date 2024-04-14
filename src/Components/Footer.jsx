import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import logo from './Assets/logo.png'

export default function Footer() {
	return (
		<footer className="py-6 mt-2  bg-[#b37646] text-white">
			<div className="container justify-center text-center px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
				<div className="">
					<div className="flex items-center justify-center ">
						<img src={logo} alt='logo' className="flex-shrink-0 w-16 rounded-full text-gray-900">
						</img>
					</div>
					<span className="self-center text-2xl font-semibold">Foody Hub</span>
				</div>
				<div className=" justify-center text-center pt-4 lg:justify-between">
					<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
						<span>©{new Date().getFullYear()} All rights reserved</span>
						<a rel="noopener noreferrer" href="/">
							<span>Privacy policy</span>
						</a>
						<a rel="noopener noreferrer" href="/">
							<span>Terms of service</span>
						</a>
					</div>
					<div className='flex flex-row sm:items-auto justify-center text-center py-3 lg:items-auto gap-3'>
						<a target='blank' href="/https://wa.me/"><button className=' rounded-full py-1 px-4 transition duration-300 easeinout hover:bg-green-600 hover:text-white hover:border-none'><BsWhatsapp size={30}/></button></a>
						<a target='blank' href="https://www.linkedin.com/in/nishu-6873a3232/"><button className=' rounded-full py-1 px-4  transition duration-300 easeinout hover:bg-slate-300 hover:text-blue-700 hover:border-none'><FaLinkedin size={30}/></button></a>
						<a target='blank' href="https://github.com/Nishu2201"><button className=' rounded-full py-1 px-4 transition duration-300 easeinout hover:bg-black hover:text-white hover:border-none'><FaGithub size={30}/></button></a>

					</div>

				</div>

			</div>
		</footer>
	)
}
