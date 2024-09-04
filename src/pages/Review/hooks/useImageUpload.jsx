import { useState, useRef } from "react";

const useImageUpload = (maxFiles = 5) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const inputRef = useRef(null);

  // 파일 선택 버튼 클릭 처리
  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  // 파일 선택 후 미리보기 처리
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

  // 이미지 삭제 처리
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
  };
};

export default useImageUpload;
