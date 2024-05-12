import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

const MediumCarouselCard = ({ image }: any) => {
  return (
    <Card className="rounded-md w-80 h-80 flex items-center justify-center bg-card/0 outline-none border-none">
      <CardContent>
        <Image src={image} alt="logo" className='rounded-md h-full w-full' />
      </CardContent>
    </Card>
  )
}

export default MediumCarouselCard