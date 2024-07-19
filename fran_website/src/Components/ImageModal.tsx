
type ImageProps = {
    imageDetails: string;
    isVisible: Boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<Boolean>>;
}

const OpenImage: React.FC<ImageProps> = ({imageDetails, isVisible, setIsVisible}) => {


    return ( isVisible ?
        <div className="image-container"onClick={() => setIsVisible(false)}>
            <div className="image-display" >
            <img src={imageDetails} alt="" className="image" />
            </div>
        </div> : null
    )
}

export default OpenImage;