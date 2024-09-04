// 콘솔은 API 연결 완료 후 모두 지울 예정입니다.

import axios from "axios";
import { getPresignedUrl } from "../../../lib/apis/api/getPresignedURL";

/**
 * S3로 파일을 업로드하는 함수
 * @param {Array} uploadedFiles - 업로드할 파일들의 배열
 * @param {Function} setUploadMessage - 업로드 메시지를 설정하는 함수
 * @returns {Promise<Array>} - 성공적으로 업로드된 파일 URL 배열
 */

export const uploadFilesToS3 = async (uploadedFiles, setUploadMessage) => {
  if (uploadedFiles.length === 0) {
    setUploadMessage("No file.\n");
    return [];
  }

  setUploadMessage(""); // 메시지 초기화
  let allFilesUploadedSuccessfully = true;
  const fileUrls = [];

  try {
    for (const file of uploadedFiles) {
      try {
        // Presigned URL 요청 및 파일 업로드
        const { presignedUrl, fileName } = await getPresignedUrl(
          file.originalName
        );

        if (!presignedUrl || !fileName) {
          throw new Error(
            `Failed to get presigned URL for ${file.originalName}`
          );
        }

        console.log("Received Presigned URL:", presignedUrl);
        console.log("Received File Name:", fileName);

        // 새로운 파일 객체 생성
        const newFile = new File([file.file], fileName, {
          type: file.file.type,
        });

        // URL 디코딩 처리
        const decodedPresignedUrl = presignedUrl.replace(/&amp;/g, "&");

        // Presigned URL로 파일 업로드
        const uploadResponse = await axios.put(decodedPresignedUrl, newFile, {
          headers: {
            "Content-Type": file.type,
          },
        });

        if (uploadResponse.status === 200 || uploadResponse.status === 201) {
          setUploadMessage(
            (prevMessage) =>
              prevMessage + `File ${fileName} uploaded successfully!\n`
          );
          const s3FileUrl = `https://youngcamp-dev.s3.ap-northeast-2.amazonaws.com/${fileName}`;
          fileUrls.push(s3FileUrl);
        } else {
          setUploadMessage(
            (prevMessage) =>
              prevMessage + `Failed to upload file ${file.originalName}.\n`
          );
          allFilesUploadedSuccessfully = false;
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setUploadMessage(
          (prevMessage) =>
            prevMessage + `Error uploading file ${file.originalName}.\n`
        );
        allFilesUploadedSuccessfully = false;
      }
    }

    if (!allFilesUploadedSuccessfully) {
      setUploadMessage(
        (prevMessage) => prevMessage + "Cannot complete the upload process.\n"
      );
    }

    return fileUrls; // 성공적으로 업로드된 파일 URL을 반환
  } catch (error) {
    console.error("Error in upload process:", error);
    setUploadMessage("Error during upload process.");
    return [];
  }
};
