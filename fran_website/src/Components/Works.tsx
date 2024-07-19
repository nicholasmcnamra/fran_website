import { MouseEventHandler, useEffect, useState } from "react";

const Works = () => {
    const [works, setWorks] = useState<string[]>([]);

    const tempWorks: string[] = 
    ['https://mapsandart.com/wp-content/uploads/2016/04/10537M-scaled.jpg', 
    'https://m.media-amazon.com/images/S/aplus-media/vc/070d7062-31a0-45a5-9045-41d5c1c0d8fd.__CR0,0,2021,1250_PT0_SX970_V1___.jpg', 
    'https://i.pinimg.com/736x/25/ba/f5/25baf503204609e69bbd4850649e3b95.jpg', 
    'https://i.etsystatic.com/25611550/r/il/a260b2/2707846524/il_570xN.2707846524_cgsk.jpg', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdCshIp1yAeHtdFZGH2YY-QORoS18O8NuJDF022AFR-tA-E7eGTzThOlTjOn5wA-DrqY&usqp=CAU', 
    'https://www.brianturnerart.com/uploads/9/2/0/0/92000654/s643285638912410908_p304_i1_w640.jpeg', 
    'https://i.etsystatic.com/8520458/r/il/6e2aa0/3594223858/il_570xN.3594223858_7tef.jpg', 
    'https://i.ebayimg.com/images/g/8ecAAOSwn29j4adx/s-l1200.jpg', 
    'https://i.ytimg.com/vi/avYg2bhqTSI/maxresdefault.jpg']

    const handleOpenModal = (index: number): void => {
        console.log("Image number: ", index);
    }

    useEffect(() => {
            setWorks(tempWorks);
    }, [])

    return (
        <div className="works-container">
            {works.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Work ${index}`} className="works" onClick={(e) => handleOpenModal(index)}/>
            ))}
        </div>
    )
}

export default Works;