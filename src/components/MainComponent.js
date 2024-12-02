import { useState } from "react";
import Header from "./Header";
import {
  CircularProgress,
  Grid,
  Box,
  Stack
} from "@mui/material";
import "./MainComponent.css";

const MainComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        <Header />
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item className="banner-grid">
                <Grid container className="hero">
                  <Grid item xs={9} className="hero-content">
                    <div className="hero-heading">100 Thousand Songs, ad-free</div>
                    <div className="hero-heading">Over thousands podcast episodes</div>
                  </Grid>
                  <Grid item xs={3} className="hero-image"></Grid>
                </Grid>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
    </div>
  );
}

export default MainComponent;