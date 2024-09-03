import React from "react";

const Loading = () => {
  const mediaUrl = import.meta.env.VITE_MEDIA_URL;

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={`${mediaUrl}Common/spinner.gif`}
          alt="로딩중"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    </>
  );
};

export default Loading;
