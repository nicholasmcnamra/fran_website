import { useCallback, useState } from "react";
import AccountNavbar from "./AccountNavbar";
import axios from "axios";

interface ArtworksPortalProps {
    props: null;
}
const ArtworksPortal: React.FC<ArtworksPortalProps> = () => {
    const [file, setFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setPreviewUrl(URL.createObjectURL(e.target.files[0]));
        }
    }

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type.startsWith('image/')) {
            setFile(droppedFile);
            setPreviewUrl(URL.createObjectURL(droppedFile));
        }
    }, []);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

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
                <div
                    className="dropzone"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    style={{
                        border: "2px dashed #aaa",
                        padding: "2rem",
                        textAlign: "center",
                        borderRadius: "1rem",
                        marginBottom: "1rem",
                        backgroundColor: "#f9f9f9"
                    }}>
                    <p>Drag & drop an image here, or select a file</p>
            {previewUrl && (
                <img
                    src={previewUrl}
                    alt="Preview"
                    style={{
                        marginTop: "1rem",
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px"
                    }}
                />
            )}
            </div>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
            </form>
        </div>
    )
}

export default ArtworksPortal;