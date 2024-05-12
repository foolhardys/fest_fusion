import Image from 'next/image'
import React from 'react'

const Banner = ({ image }: any) => {
    return (
        <article className='my-6 rounded-md'>
            <Image src={image} height={600} className='rounded-md shadow-md' alt="logo" />
        </article>
    )
}

export default Banner