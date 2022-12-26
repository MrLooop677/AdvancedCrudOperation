import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ErrorElement = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div id="error-page" className="mt-5 text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Button
          variant="danger"
          onClick={() => navigate("/", { replace: true })}
        >
          Back
        </Button>{" "}
      </div>
    </>
  );
};

export default ErrorElement;
