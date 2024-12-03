import {
Grid,
Box,
Stack,
Typography
} from "@mui/material";
import AlbumCard from "./AlbumCard";
import Button from './../utils/Button';

const Section = ({albums, heading, handleToggle}) => {
    return (
        <Box padding="1rem" sx={{ mx: 1 }} md={{ mx: 3, my: 3 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <h3 style={{color:"#fff"}} variant="h6" gutterBottom>{heading}</h3>
                <Button style={{color:"#34C94B", cursor: "pointer"}} type="collapse" handleClick={handleToggle} />
            </Stack>
            
            <Grid container>
            {
                albums.map((album) => ( 
                <Grid item key={album.id} xs={4} md={2}>
                    <AlbumCard album={album} />
                </Grid>
                ))
            }
            </Grid>
        </Box>
    )
}
export default Section;