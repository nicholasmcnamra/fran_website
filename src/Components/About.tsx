import { Grid } from "@mui/material";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-text-area">
                <h2 className="about">About</h2>
                <p className="text-area">Frances Carter, a contemporary mixed-media artist, explores the intricate relationship between nature and human emotion through her vibrant creations. With a background in environmental science, Carter infuses her artwork with a deep appreciation for the natural world, often incorporating organic materials like leaves, feathers, and reclaimed wood into her pieces. Her unique artistic style blends abstract expressionism with elements of realism, inviting viewers to contemplate the beauty and fragility of our planet while reflecting on their own inner landscapes.</p>
                <p className="text-area">Drawing inspiration from her multicultural upbringing and travels around the globe, Carter's work transcends cultural boundaries, offering a universal language of connection and introspection. Through bold brushstrokes and intricate textures, she captures the essence of fleeting moments, inviting viewers on a journey of self-discovery and contemplation. Carter's art has been exhibited in galleries and museums worldwide, earning acclaim for its emotional depth and visual richness. With each new creation, she continues to push the boundaries of artistic expression, inspiring audiences to embrace the beauty and complexity of the world around them.</p>
            </div>
            <div className="about-image-area">
                <img src="https://glasstire.com/wp-content/uploads/2023/09/Terri-Thornton-courtesy-the-Modern-Art-Museum-of-Fort-Worth.jpg?x88956" className="about-image"></img>
            </div>
        </div>
    )
}

export default About;