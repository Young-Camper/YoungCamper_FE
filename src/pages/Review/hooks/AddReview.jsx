import { useState } from "react";

//lib(비속어 필터링)
import Filter from "badwords-ko";

const useAddReview = () => {
  const [comments, setComments] = useState([]); // 기존 리뷰 데이터 관리
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const filter = new Filter(); //비속어 필터링 함수

  // 리뷰 데이터를 가져오는 함수
  const fetchComments = async () => {
    try {
      const response = await fetch("/reviews.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setError(error);
    }
  };

  // 새로운 리뷰를 추가하는 함수
  const addReview = async (review, password, imagePreviews) => {
    if (!review || !password) {
      //->ReviewValidation 훅으로 대체
      alert("리뷰와 비밀번호를 입력해주세요.");
      return;
    }

    const newReview = {
      id: comments.length + 1,
      text: filter.clean("review"),
      date: new Date().toLocaleString(),
      image: imagePreviews[0] || null, // 첫 번째 이미지만 추가
    };

    try {
      setLoading(true);
      const response = await fetch("/reviews.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const updatedComments = [...data, newReview];

      // 실제 파일 쓰기는 서버에서 처리
      console.log("Updated reviews:", updatedComments);
      setComments(updatedComments); // 상태 업데이트
    } catch (error) {
      console.error("Error adding review:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { comments, loading, error, fetchComments, addReview };
};

export default useAddReview;
