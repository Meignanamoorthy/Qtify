import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Stack, Typography } from "@mui/material";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AlbumCard from "./../components/AlbumCard";

const Carousel = ({heading, albums, type}) => {
    return (
        <Box sx={{ mx: 1 }} md={{ mx: 3, my: 3 }}>
            <Swiper 
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={7}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            allowTouchMove
            >
                {
                    albums.map((album) => (
                        <SwiperSlide key={album.id}>
                            <AlbumCard album={album} type={type}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}

export default Carousel;