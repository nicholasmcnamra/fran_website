
type ImageProps = {
    imageDetails: string;
    isVisible: Boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<Boolean>>;
}

const OpenImage: React.FC<ImageProps> = ({imageDetails, isVisible, setIsVisible}) => {


    return ( isVisible ?
        <div className="mod-container"onClick={() => setIsVisible(false)}>
            <div className="mod-display" >
            <img src={imageDetails} alt="" className="image" />
            </div>
        </div> : null
    )
}

export default OpenImage;