import React, {useState} from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

export default function HireMe({modal}) {


  const handleModal = (e) => {
    setModal(!modal)
  }

  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
        <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
            <CircularText className={`fill-dark animate-spin-slow`}/>
        </div>

        <Link href="https://docs.google.com/document/d/1EHxOJi0Wmij0Db_kGICpXgv2PQALHAG4A5HxqMra594/edit"
        target="_blank"
        className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
        md:w-12 md:h-12 md:text-[10px]
        "
        >    
        Hire Me
        </Link>

        
    </div>
  )
}
