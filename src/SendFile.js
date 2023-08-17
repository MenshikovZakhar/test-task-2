import axios from "axios";

const MAX_FILES = 100;
const UPLOAD_URL = 'https://cloud-api.yandex.net/v1/disk/resources/upload';
export const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length > MAX_FILES) {
        alert(`Выберите до ${MAX_FILES} файлов.`);
        return;
    }

    try {
        for (const file of acceptedFiles) {
            await uploadFile(file);
        }
        alert('Файлы успешно загружены');
    } catch (error) {
        console.error('Ошибка загрузки файла:', error);
        alert('Ошибка при загрузке файлов');
    }
};

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.get(UPLOAD_URL, {
            params: { path: file.name, overwrite: true },
            headers: { Authorization: 'y0_AgAAAABQaLz7AApaXwAAAADqdGvcL42GOIuZQLuUf-BkY8p6Wd6wLUQ' }, // Replace with your OAuth token
        });

        await axios.put(response.data.href, formData);
    } catch (error) {
        throw new Error('Ошибка при загрузке файлов.');
    }
};