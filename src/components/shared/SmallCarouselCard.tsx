import * as React from "react"
import image from '@/components/shared/assets/sample_college.png'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

export function SmallCarouselCard() {
    return (
        <Card className="rounded-md w-40 h-40 flex items-center justify-center bg-card/0 outline-none border-none">
            <CardContent>
               <Image src={image} alt="logo" width={200} height={200}/>
            </CardContent>
        </Card>

    )
}
