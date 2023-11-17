import { Box, Button } from "@mui/material";
import React from "react";
import NavBar from "./NavBar";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ marginLeft: '770px', marginTop: "40px" }}>
        <img
          height="600"
          width="780"
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

      <input type="button" className="mainPageBtn" value="Learn More"/>



    </>
  );
};

export default MainPage;
