import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  const goBackOrHome = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>Page not found</p>
      <button onClick={goBackOrHome}>Go back or home</button>
    </div>
  );
}

export default NotFoundPage;
