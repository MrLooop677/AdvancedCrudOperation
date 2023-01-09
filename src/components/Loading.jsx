import React from "react";

const Loading = ({ loading, error, children }) => {
  const btnType = children?.props?.name;
  console.log(btnType);
  const renderHundler = () => {
    if (btnType == "Button") {
      const cloneBtn = React.cloneElement(
        children,
        { disabled: true },
        "Loading..."
      );
      return (
        <>
          {loading ? (
            cloneBtn
          ) : error ? (
            <>
              {children}
              <p>{error}</p>
            </>
          ) : (
            children
          )}
        </>
      );
    }
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
  return renderHundler();
};

export default Loading;
