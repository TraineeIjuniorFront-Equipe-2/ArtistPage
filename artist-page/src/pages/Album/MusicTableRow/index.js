import { useState } from "react";

import HeartFilled from "../../../assets/icons/heartFilled";
import trash from "../../../assets/icons/trash.svg";

import "./style.css";

const MusicTableRow = ({ index, name, singer, album, onDelete, img }) => {
  const [isLiked, setIsLiked] = useState(false);

  const objLiked = JSON.parse(localStorage.getItem("liked"));
  const saveLiked = {
    name: name,
    singer: singer,
    album: album,
    img: img
  };

    if (isLiked) {
      localStorage.setItem("liked", JSON.stringify(saveLiked));
      var items=[];
      items.push(objLiked.name);
      items.push(objLiked.singer);
      items.push(objLiked.album);
      items.push(objLiked.img);
      console.log(items);
    }else{
      localStorage.removeItem("liked");
      console.log(items);
    }

  return (
    <div className="music-table-row">
      <div className="music-table-row-content">
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <img src={img} alt="play" width={"40px"} />
          <div style={{ textAlign: "start" }}>
            <p>{name}</p>
            <p>{singer}</p>
          </div>
        </div>
        <div>
          <span>{album}</span>
        </div>
        <div className="music-table-row-btns">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              //salvaria um json(vetor) contendo os dados das musicas curtidas
            }}
          >
            <HeartFilled isFilled={isLiked} />
            
          </button>
          
          <button onClick={onDelete}>
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicTableRow;
