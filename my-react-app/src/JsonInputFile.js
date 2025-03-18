import React, { useState } from "react";

function FileInput() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState(""); 

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); 
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file before uploading.");
            return;
        }

        const formData = new FormData(); 
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:5001/api/Home/upload-json", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setMessage("File uploaded successfully!");
            } else {
                setMessage("Failed to upload file.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            setMessage("An error occurred during the upload.");
        }
    };

    return (
        <div className="container mt-4">
            <h4 className="mb-3">Upload JSON File</h4>
            <input 
                type="file" 
                accept=".json" 
                onChange={handleFileChange} 
                className="form-control mb-3"
            />
            <button onClick={handleUpload} className="btn btn-primary">
                Upload File
            </button>
            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}

export default FileInput;
