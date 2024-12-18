import Box from "@mui/material/Box";
import React from "react";
import Textbox from "./../utils/Textbox"
import Button from "./../utils/Button"
import "./Header.css";

const Header = () => {  
    return (
        <Box className="header">
            <Box className="header-title">
                <img src="logo.png" alt="QTify-icon"></img>
            </Box>
            <Box><Textbox /></Box>
            <Box direction="row" spacing={1} alignItems="baseline">
                <Button type="feedback" />
            </Box>
        </Box>
    )
};

export default Header;