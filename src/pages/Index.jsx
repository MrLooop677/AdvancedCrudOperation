import React, { useCallback, useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../state/postSlice";
import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postSlice);
  const deleteRow = useCallback((id) => dispatch(deleteData(id)), [dispatch]);
  const { isLogin } = useSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Loading loading={loading} error={error}>
      <PostList data={posts} deleteRow={deleteRow} isLogin={isLogin} />
    </Loading>
  );
};

export default Index;
