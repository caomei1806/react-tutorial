import React, { useState } from "react";
import { Photo } from "./Photo";

export interface CatPhoto {
  breeds: string[];
  categories: Category[];
  id: string;
  url: string;
  width: number;
  height: number;
}

interface Category {
  id: number;
  name: string;
}

export const PhotosList: React.FC = () => {
  const [catPhotos, setCatPhotos] = useState<CatPhoto[]>([]);
  const url = "https://api.thecatapi.com/v1/images/search";

  const getNewCatPhoto = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCatPhotos((state) => [...data, ...state]);
      });
  };

  return (
    <div>
      <button onClick={getNewCatPhoto}>Get new photo</button>
      {catPhotos.map((catPhoto, index) => {
        return <Photo catPhoto={catPhoto} />;
      })}
    </div>
  );
};
