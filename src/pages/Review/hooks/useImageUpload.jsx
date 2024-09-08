import { useState, useRef } from "react";

const useImageUpload = (maxFiles = 5) => {
  const [imagePreviews, setImagePreviews] = useState([]); // 이미지 미리보기 상태
  const [uploadedFiles, setUploadedFiles] = useState([]); // 업로드된 파일 상태
  const [uploadMessage, setUploadMessage] = useState(""); // 업로드 메시지 상태
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

    // 최대 파일 수 초과 확인
    if (files.length + imagePreviews.length > maxFiles) {
      alert(`최대 ${maxFiles}개까지 이미지를 추가할 수 있습니다.`);
      return;
    }

    // 새로운 파일들 처리
    const newPreviews = files.map((file) => {
      const blobUrl = URL.createObjectURL(file);
      return { originalName: file.name, url: blobUrl, type: file.type, file };
    });

    // 기존 파일에 새로운 파일 추가
    setUploadedFiles((prevFiles) => [...prevFiles, ...newPreviews]);

    // 이미지 미리보기 처리
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

    // input 값 초기화
    event.target.value = "";
  };

  // 이미지 삭제 처리
  const handleRemoveImage = (index) => {
    setImagePreviews((prevImages) => prevImages.filter((_, i) => i !== index));
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // 업로드 초기화 함수
  const resetUpload = () => {
    setImagePreviews([]);
    setUploadedFiles([]);
    setUploadMessage("");
  };

  return {
    imagePreviews,
    setImagePreviews,
    inputRef,
    handleButtonClick,
    handleFileChange,
    handleRemoveImage,
    uploadedFiles,
    uploadMessage,
    setUploadMessage,
    resetUpload,
  };
};

export default useImageUpload;
