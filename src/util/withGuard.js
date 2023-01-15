import React from "react";
import { useSelector } from "react-redux";

const withGuard = (Component) => {
  const Wrapper = () => {
    const { isLogin } = useSelector((state) => state.authSlice);
    return isLogin ? <Component /> : <div>Please LogIn</div>;
  };
  return Wrapper;
};

export default withGuard;
