import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPEG", "PNG", "GIF"];

const Admin = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <p>{file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>
      </div>
    </div>
  );
};

export default Admin;
