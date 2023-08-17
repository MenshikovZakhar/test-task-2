import { dropzoneStyles } from "./style";
import React from "react";

const DumbFile = ({ getRootProps, getInputProps }) => (
    <div>
        <div {...getRootProps()} style={dropzoneStyles}>
            <input {...getInputProps()} />
            <p>Перетащите файлы сюда или нажмите, чтобы выбрать файлы</p>
        </div>
    </div>
)

export default DumbFile;