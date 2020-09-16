import { url } from "inspector";
import React, { useState } from "react";
import { CatPhoto } from "./PhotosList";

interface Props {
  cat: CatPhoto;
  index: number;
  onImageDelete: (index: number) => {};
}

export const Cat: React.FC<Props> = ({ cat, index, onImageDelete }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div className="cat" style={{ backgroundImage: `url(${cat.url})` }}>
      <img src={cat.url} onLoad={toggleLoading} />
      {isLoading ? (
        <div className="loading">
          <i className="bx bx-loader-alt bx-spin"></i>
        </div>
      ) : null}
      <div className="options">
        <button
          onClick={() => {
            setIsLoading(true);
            onImageDelete(index);
          }}
        >
          <i className="bx bx-repeat"></i>
        </button>
        <a href={cat.url} target="_blank">
          <i className="bx bx-link-external"></i>
        </a>
      </div>
    </div>
  );
};
