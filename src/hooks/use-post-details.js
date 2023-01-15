import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailData } from "../state/postSlice";
const usePostDetails = () => {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const { item, loading, error } = useSelector((state) => state.postSlice);
  useEffect(() => {
    dispatch(DetailData(id));
  }, [dispatch, id]);
  return { item, loading, error };
};
export default usePostDetails;
