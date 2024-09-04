import { useState, useRef } from "react";

const useImageUpload = (maxFiles = 5) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadMessage, setUploadMessage] = useState(""); // 추가된 상태
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length + imagePreviews.length > maxFiles) {
      alert(`최대 ${maxFiles}개까지 이미지를 추가할 수 있습니다.`);
      return;
    }

    const newPreviews = files.map((file) => {
      const blobUrl = URL.createObjectURL(file);
      return { originalName: file.name, url: blobUrl, type: file.type, file };
    });

    setUploadedFiles((prevFiles) => [...prevFiles, ...newPreviews]);

    const previewPromises = files.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    Promise.all(previewPromises).then((loadedImages) => {
      setImagePreviews((prevImages) => [...prevImages, ...loadedImages]);
    });
  };

  const handleRemoveImage = (index) => {
    setImagePreviews((prevImages) => prevImages.filter((_, i) => i !== index));
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return {
    imagePreviews,
    inputRef,
    handleButtonClick,
    handleFileChange,
    handleRemoveImage,
    uploadedFiles,
    uploadMessage, // 추가된 부분
    setUploadMessage, // 추가된 부분
  };
};

export default useImageUpload;
