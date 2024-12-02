import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import "./Textbox.css";

const Textbox = () => {  
    return (
        <div>
            <TextField
            className="search-box"
            size="small"
            fullWidth
            sx={{width: '500px'}}
                
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <Search color="primary" />
                </InputAdornment>
                ),
            }}
            placeholder="Search a album of your choice"
            name="search"
            />
        </div>
    )
}

export default Textbox;