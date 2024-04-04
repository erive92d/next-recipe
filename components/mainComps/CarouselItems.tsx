"use client"
import React from 'react';
import Slider from 'react-slick';

// Import CSS for react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { PeopleChoiceType } from '@/lib/props';

type CarouselProp = {
    items: PeopleChoiceType[]
}

const CarouselItems = ({ items }: CarouselProp) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, // Enable center mode
        focusOnSelect: true, // Focus on the selected item
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <Slider className="" {...settings}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className='font-thin py-4'>
                    <Link href={`/recipe/${item.id}`}
                        className=' text-center text-black'>{item.name}
                    </Link>
                    <Image className='rounded-lg' src={`${item.image}/preview`} unoptimized height={350} width={350} alt="recipeThumb" />
                </div>
            ))}
        </Slider>
    );
};

export default CarouselItems;




