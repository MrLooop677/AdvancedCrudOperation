import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../state/postSlice";
import Loading from "../components/Loading";

const Index = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postSlice);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <Loading loading={loading} error={error}>
      <PostList data={posts} />
    </Loading>
  );
};

export default Index;
