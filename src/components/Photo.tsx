import React from "react";
import { CatPhoto } from "./PhotosList";

interface Props {
  catPhoto: CatPhoto;
}

export const Photo: React.FC<Props> = (props) => {
  return (
    <div>
      <img src={props.catPhoto.url} alt={props.catPhoto.breeds[0]} />
    </div>
  );
};
