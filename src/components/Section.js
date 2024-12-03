import {
Grid,
Box,
Stack,
Typography
} from "@mui/material";
import AlbumCard from "./AlbumCard";

const Section = ({albums, heading, handleToggle}) => {
    return (
        <Box padding="1rem" sx={{ mx: 1 }} md={{ mx: 3, my: 3 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <h3 style={{color:"#fff"}} variant="h6" gutterBottom>{heading}</h3>
                <h4 style={{color:"#34C94B", cursor: "pointer"}} onClick={handleToggle}>Collapse</h4>
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