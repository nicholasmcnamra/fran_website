import { useState } from "react";
import ArtworksPortal from "./ArtworksPortal";

interface ArtworksManagerProps {
    props: null;
}

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

export const ArtworksManager: React.FC<ArtworksManagerProps> = () => {
    const [showModal, setShowModal] = useState<Boolean>(false);

    const openModal = () => {
        setShowModal(true);
        console.log(showModal);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    return (
    <div>
        <div className="manage-artworks-header">
        <h1>
            Manage Artworks
        </h1>

        <button onClick={openModal}>Upload Work</button>
        </div>
        <div className="artwork-manager-works-container">
            {tempWorks.map((image, index) => (
                <div>
                    {/* <div className="artwork-manager-work"> */}
                    <img className="artwork-manager-work" key={index} src={image} alt={`Work ${index}`}/>
                    {/* </div> */}
                </div>
            ))}
        </div>
        

            {showModal && (
                <div className="upload-work-modal-container" onClick={closeModal}>
                <div className="upload-work-modal" onClick={e => {e.stopPropagation()}}>
                    <ArtworksPortal props={null}></ArtworksPortal>
                </div>
                </div>
            ) }


        </div>
    )
}