import React from 'react';
import { useDropzone } from 'react-dropzone';
import { onDrop } from "./SendFile"
import { dropzoneStyles } from "./style";



const FileUploader = () => {

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: true });

    return (
        <div>
            <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                <p>Перетащите файлы сюда или нажмите, чтобы выбрать файлы</p>
            </div>
        </div>

    );
};
export default FileUploader;
