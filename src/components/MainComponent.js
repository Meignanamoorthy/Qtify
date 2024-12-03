import { SentimentDissatisfied } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Header from "./Header";
import {
  CircularProgress,
  Grid,
  Box,
  Stack,
  Typography
} from "@mui/material";
import { useSnackbar } from "notistack";
import axios from "axios";
import "./MainComponent.css";
import { config } from "../App";
import Section from "./Section";

const MainComponent = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [count, setCount] = useState(0);
  const [topAlbums, setTopAlbums] = useState([]);
  const [albumApiCalled, setAlbumApiCalled] = useState(false);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async() => {
    setAlbumApiCalled(true);
    let apiCall = await axios.get(config.endpoint+"/albums/top")
    .catch((error) => {
      setAlbumApiCalled(false);
      if(error.response === undefined) {
        enqueueSnackbar('Something went wrong. Check that the backend is running, reachable and returns valid JSON.', {variant: 'error'});
      } else if (error.response.status >= 400 && error.response.status < 500) {
        enqueueSnackbar(error.response.data.message, {variant: 'error'});
      }
    })
    .then(response => {
      setAlbumApiCalled(false);
      if (response !== undefined) {
        setTopAlbums(response.data);
      } else {
        enqueueSnackbar('Something went wrong. Check that the backend is running, reachable and returns valid JSON.', {variant: 'error'});
      }
    });
  }

  return (
    <div>
        <Header />
        <Grid container className="main-grid">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container className="hero">
                  <Grid item xs={9} className="hero-content">
                    <div className="hero-heading">100 Thousand Songs, ad-free</div>
                    <div className="hero-heading">Over thousands podcast episodes</div>
                  </Grid>
                  <Grid item xs={3} className="hero-image"></Grid>
                </Grid>
              </Grid>
            </Grid>
            {
            albumApiCalled ? 
              (<Box className="loading">
                <CircularProgress />
                Loading Products
              </Box>)
            :
              albumApiCalled && topAlbums.length === 0 ? 
              (<Box className="loading">
                <SentimentDissatisfied />
                No albums found
              </Box>)
            :
              (
                <Section albums={topAlbums} heading="Top Albums" />
              )
            }
          </Grid>
        </Grid>
    </div>
  );
}

export default MainComponent;