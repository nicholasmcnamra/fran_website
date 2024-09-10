import { useState } from "react";
import AccountNavbar from "./AccountNavbar";
import axios from "axios";

interface ArtworksPortalProps {
    props: null;
}
const ArtworksPortal: React.FC<ArtworksPortalProps> = () => {
    const [file, setFile] = useState<File | null>(null)

    const handleChange = (e: any) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    const uploadArtwork = async (e:any) => {
        e.preventDefault();
        if (file ) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('fileName', file.name);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            };
            try {
            const response = await axios.post(`http://localhost:8080/storage/uploadFile`, formData, config);
            console.log(response);
        }
             catch (error) {
                console.error('Error uploading file:', error);
            }
        }
        else {
            console.error('No file selected.');
        };
    }
    return (
        <div className="artworksportal-container">
            <form onSubmit={uploadArtwork}>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default ArtworksPortal;