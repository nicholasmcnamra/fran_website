import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewButton from "./ViewButton";


const Home = () => {
    const [display, setDisplay] = useState<"displayed" | "notdisplayed">("notdisplayed");

    const showButton = () => {
        setDisplay("displayed");
    }

    const hideButton = () => {
        setDisplay("notdisplayed");
    }

    return (
        <div className="home-container">
            <div className="image-container" onMouseEnter={showButton} onMouseLeave={hideButton}>
            <img src="https://juniperprintshop.com/cdn/shop/products/HILLSI.jpg?v=1664166602" alt="" className="home-image"/>
            <ViewButton display={ display }></ViewButton>
            </div>
        </div>
    )
}

export default Home;