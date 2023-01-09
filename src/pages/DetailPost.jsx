import React from "react";
import usePostDetails from "../hooks/use-post-details";
import Loading from "../components/Loading";

const DetailPost = () => {
  const { item, loading, error } = usePostDetails();

  return (
    <>
      <Loading error={error} loading={loading}>
        <p>Title: {item.title}</p>
        <p>Description: {item?.body}</p>
      </Loading>
    </>
  );
};

export default DetailPost;
