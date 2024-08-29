import { useState } from "react";

export const useReviewValidation = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleInputButtonClick = (review, password) => {
    if (!review) {
      setModalMessage(
        "후기를 작성하지 않았습니다.\n500자 이내 후기를 작성해주세요."
      );
      setShowModal(true);
      return;
    }

    if (!password) {
      setModalMessage(
        "비밀번호를 입력하지 않았습니다.\n숫자 4자리 비밀번호를 입력해 주세요."
      );
      setShowModal(true);
      return;
    }
  };

  return { showModal, setShowModal, modalMessage, handleInputButtonClick };
};
