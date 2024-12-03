import {
Grid,
Box,
Stack,
Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import AlbumCard from "./AlbumCard";
import Carousel from "./../utils/Carousel";

const Section = ({albums, heading}) => {
    const [showCarousel, setShowCarousel] = useState(true);
    return (
        <Box padding="1rem" sx={{ mx: 1 }} md={{ mx: 3, my: 3 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <h3 style={{color:"#fff"}} variant="h6" gutterBottom>{heading}</h3>
                <h4 style={{color:"#34C94B", cursor: "pointer"}} onClick={()=>setShowCarousel(!showCarousel)}>{ showCarousel ? "Show All" : "Collapse"}</h4>
            </Stack>
            
            {
                !showCarousel ? (<Grid container>
                {
                    albums.map((album) => ( 
                    <Grid item key={album.id} xs={4} md={2}>
                        <AlbumCard album={album} />
                    </Grid>
                    ))
                }
                </Grid>)
                : (<Carousel heading={heading} albums={albums} />)
            }
            
        </Box>
    )
}
export default Section;