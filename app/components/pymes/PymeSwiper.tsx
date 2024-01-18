'use client'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FC } from 'react';
import { useMediaQuery } from '@mui/material';



interface Props {
  images: string[]
}



export const PymeSwiper: FC <Props> = ({images}) => {


  const esMovil = useMediaQuery('(max-width:600px)');


  return (
    <Swiper
    autoplay={{
      delay: 3000
    }}
    pagination={{ clickable: true}}
    modules={[Navigation, Pagination, Autoplay]}
    className='mySwiper'
    slidesPerView={1}
    spaceBetween={30}
>
        {
          images.map(image => (
            <SwiperSlide key={image as any}>
                <Image 
                key={image}
                src={image} 
                width={esMovil ? 370 : 300} 
                height={esMovil ? 300 : 250}
                style={{objectFit: 'fill'}}
                objectFit={'cover'} 
                 alt={'Frutillar Pyme'}
                  />
            </SwiperSlide>

          ))
        }
  

</Swiper>
  )
}
