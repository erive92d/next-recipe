import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { PeopleChoiceType } from "@/lib/props"

type CarouselProp = {
    items: PeopleChoiceType[]

}

export default function CarouselTest({ items }: CarouselProp) {

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
        >
            <CarouselContent className="">
                {items.map((item, index) => (
                    <CarouselItem key={index} className="pl-0 md:basis-1/4 lg:basis-1/3">
                        <div className="p-0">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {/* <span className="text-3xl font-semibold">{item.name}</span> */}
                                    <Image className={`rounded-lg`} src={`${item.image}/preview`} unoptimized height={400} width={400} alt="recipeThumb" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
