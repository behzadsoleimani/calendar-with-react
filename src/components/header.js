import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from "@material-ui/core/Chip";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
      <div>
    <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "5px"
    }}>
        <div><label>November 2019</label></div>
        <div><label>Today</label></div>
        <div>
        <TextField
        id="input-with-icon-textfield"
        className="text-search"
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      </div>
    </div>
    <div style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "10px"
    }}>
    <Chip 
    style={{
      background: "none",
}}
    label="Day" />
    <Chip 
    label="Week"  style={{
      background: "none",
}} />
    <Chip 
    label="Month"  style={{
      background: "orange",
}} />
    </div>
    </div>
  );
}

export default Header;
