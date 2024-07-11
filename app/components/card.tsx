import React from 'react'
import Link from "next/link";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {}

const Card = (props: Props) => {
    return (
        <div className="lg:w-1/4 sm:w-1/2 p-4">
            <div className="flex relative rounded-xl overflow-hidden">
                <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://dummyimage.com/600x360"
                />
                <div className="px-8 py-10 relative z-10 w-full rounded-xl overflow-hidden border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="text-sm title-font font-semibold text-indigo-500 mb-1">
                        The Subtitle
                    </h2>
                    <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                        Shooting Stars
                    </h1>
                    <p className="leading-relaxed">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat. Photo booth fam
                        kinfolk cold-pressed sriracha leggings jianbing microdosing
                        tousled waistcoat. Photo booth fam kinfolk cold-pressed
                        sriracha leggings
                    </p>
                </div>
            </div>
            <div className="flex items-start py-3">
                <div className='w-full'>
                    <p className='font-semibold'>Postcard from Tokyo</p>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors flex items-center hover:text-foreground text-base"
                    >
                        Behance
                        <span className="bg-gradient-to-r from-[#0088fd] text-xs to-[#001faa] rounded text-white px-2 py-1 ml-2">
                            pro
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-3 w-full justify-end">
                    <div className='flex items-center gap-1'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0.5 0.5 16 16" className="Appreciations-icon-Z4i ProjectCover-icon-QsA ProjectCover-appreciations-hIS"><path fill="none" d="M.5.5h16v16H.5z"></path><path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path></svg>
                        </span>
                        <span className='text-sm'>
                            224
                        </span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="ProjectCover-icon-QsA ProjectCover-views-Euf"><path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path></svg>
                        </span>
                        <span className='text-sm'>
                            3.7K
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card