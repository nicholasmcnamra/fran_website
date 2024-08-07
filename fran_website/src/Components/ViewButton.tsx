import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ViewButtonProps {
    display: "displayed" | "notdisplayed"; 
}

const ViewButton: React.FC<ViewButtonProps> = ({ display }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/works");
    }

    return (
    <div className={display === "displayed" ? "display" : "notdisplayed"}>
        {display === "displayed" && 
        <Button 
        className="home-button" 
        variant="outlined" 
        sx={{
        color: "white", // Example text color
        borderColor: "white", 
        borderRadius: "0px",
        fontSize: "2.5rem",
        borderWidth: "10px",
        "&:hover": {
        borderColor: "white",
        }
    }} 
    onClick={handleButtonClick}>View Work</Button>}
    </div>)
}

export default ViewButton;