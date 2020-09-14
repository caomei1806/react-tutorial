import React from "react";
import { useParams } from "react-router-dom";

type postUrlParamsType = {
  id: string;
};

export const Post: React.FC = () => {
  const { id } = useParams<postUrlParamsType>();

  return <h1>Post #{id} </h1>;
};
