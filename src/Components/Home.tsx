import { Button } from "@mui/material";
import React, { useState } from "react";

interface ViewButtonProps {
    display: "displayed" | "notdisplayed"; 
}

const ViewButton: React.FC<ViewButtonProps> = ({ display }) => {
    return (
    <div className={display === "displayed" ? "display" : "notdisplayed"}>
        {display === "displayed" && <Button className="home-button" variant="outlined"                     sx={{
                        color: "white", // Example text color
                        borderColor: "white", 
                        borderRadius: "0px",
                        fontSize: "2.5rem",
                        borderWidth: "10px",
                        "&:hover": {
                            borderColor: "white",
                        }
                    }}>View Work</Button>}
    </div>)
}

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