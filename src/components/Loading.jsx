import React from "react";

const Loading = ({ loading, error, children }) => {
  return (
    <>
      {loading ? (
        <p>loading Data.....!!!</p>
      ) : error ? (
        <td>{error}</td>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
