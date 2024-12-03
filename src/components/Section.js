import {
Grid,
Box,
Stack,
Typography
} from "@mui/material";
import AlbumCard from "./AlbumCard";
import Button from "./../utils/Button"

const Section = ({albums, heading}) => {
    return (
        <Box padding="1rem" sx={{ mx: 1 }} md={{ mx: 3, my: 3 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography style={{color:"#fff"}} variant="h6" gutterBottom>{heading}</Typography>
                <Button type="collapse">Collapse</Button>
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