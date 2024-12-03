import {
    Chip,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React from "react";
import "./AlbumCard.css";

const AlbumCard = ({album}) => {
    return (
        <div key={album.id} className="card-container">
            <Card className="card" sx={{ mt:2 }}>
                <CardMedia className="card-img" component="img" alt={album.title} image={album.image} />
                <CardContent className="card-content">
                    <Chip label={`${album.follows} Follows`} variant="outlined" className="followers-count"/>
                </CardContent>
            </Card>
            <Typography variant="body2" style={{color:"#fff"}} sx={{ mt: 1 }}>{album.title}</Typography>
        </div>
    );
}
export default AlbumCard;