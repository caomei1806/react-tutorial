import React from "react";
import { useParams } from "react-router-dom";

type addUrlParamsType = {
  a: string;
  b: string;
};

export const Add: React.FC = () => {
  const { a, b } = useParams<addUrlParamsType>();

  const addNumbers = (a: string, b: string): number => {
    const parseA: number = parseInt(a);
    const parseB: number = parseInt(b);
    if (isNaN(parseA) || isNaN(parseB)) return 0;
    else return parseB + parseA;
  };
  return <h1>Suma: {addNumbers(a, b)}</h1>;
};
