import path from "path";

const getDataUri = (file) => {
    const ext = path.extname(file.originalname).slice(1); // remove dot
    const mimeType = file.mimetype; // Multer gives MIME type
    const base64 = file.buffer.toString("base64"); // convert buffer to base64

    return {
        content: `data:${mimeType};base64,${base64}`,
    };
};

export default getDataUri;
