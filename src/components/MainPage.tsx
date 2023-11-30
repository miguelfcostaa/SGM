import { Box, Button } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

const MainPage = () => {
  return (
    <div style={{ overflow: 'hidden', background: '#414141', position: 'absolute', height: '100%', width: '100%' }}>
      <NavBar />
      <Box sx={{ marginLeft: '950px', marginTop: "45px" }}>
        <img
          height="800"
          width="980"
          src="https://cdn.discordapp.com/attachments/707687832239603863/1167125417493274674/image.png?ex=654cfd3f&is=653a883f&hm=9195d283ad955a78a06e18a810284347e3e1828a38df5ad344c0ba0a963bfc1e&"
        ></img>
      </Box>
      <span className="mainPageTitle">
        Cristiano Ronaldo
      </span>
      <span className="mainPageDesc1">
        dos Santos Aveiro (born February 5,
      </span>
      <span className="mainPageDesc2">
        1985, in Funchal) is a Portuguese 
      </span>
      <span className="mainPageDesc3">
        footballer who plays as...
      </span>
      <input
        type="button"
        className="mainPageBtn"
        value="Learn More"
        onClick={() => window.location.href = "/timeline1"}
      />
    </div>
  );
};

export default MainPage;
