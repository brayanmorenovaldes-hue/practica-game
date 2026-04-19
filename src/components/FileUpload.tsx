import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];

        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile);
            setError('');
        } else {
            setError('Please upload a valid PDF, Word, or text file.');
        }
    };

    const handleUpload = () => {
        if (file) {
            // Implement upload logic here
            console.log(`Uploading: ${file.name}`);
            // Reset the file state after uploading
            setFile(null);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={handleUpload} disabled={!file}>Upload</button>
        </div>
    );
};

export default FileUpload;
