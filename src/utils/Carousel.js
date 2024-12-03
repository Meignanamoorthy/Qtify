import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Stack, Typography } from "@mui/material";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AlbumCard from "./../components/AlbumCard";

const Carousel = ({heading, albums, handleToggle}) => {
    return (
        <Box padding="1rem" sx={{ mx: 1 }} md={{ mx: 3, my: 3 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <h3 style={{color:"#fff"}} variant="h6" gutterBottom>{heading}</h3>
                <h4 style={{color:"#34C94B", cursor: "pointer"}} onClick={handleToggle}>Show All</h4>
            </Stack>

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
                            <AlbumCard album={album} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}

export default Carousel;