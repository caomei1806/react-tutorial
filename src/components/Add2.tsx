import React from "react";
import { useLocation, useParams } from "react-router-dom";

type addUrlParamsType = {
  a: string;
  b: string;
};

export const Add2: React.FC = () => {
  const urlParams: URLSearchParams = new URLSearchParams(useLocation().search);
  const a = urlParams.get("a");
  const b = urlParams.get("b");

  const addNumbers = (a: string | null, b: string | null): number => {
    if (a == null || b == null) return 0;
    const parseA: number = parseInt(a);
    const parseB: number = parseInt(b);
    if (isNaN(parseA) || isNaN(parseB)) return 0;
    else return parseB + parseA;
  };

  return (
    <div>
      <h1>Suma:{addNumbers(a, b)}</h1>
    </div>
  );
};
