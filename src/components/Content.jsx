
// import games from "./../games.json";

import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";

import RecomendedContent from "./RecomendedContent";
import ContinueContent from "./ContinueContent";
import ForyouContent from "./ForyouContent";
import Spinner from "./Spinner";

// import gameThumb from "./../assets/game-thumb.png";

// game func
const SelectContent = ({gameData}) => {
  if (gameData){
    return (
      <>
      {
        gameData.map((game, idx) => {
          if (game.name == "recomended"){
            return <RecomendedContent key={idx} idx={idx} game={gameData} />;
          } else if (game.name == "continue"){
            return <ContinueContent key={idx} idx={idx} game={gameData} />;
          } else if (game.name == "foryou"){
            return <ForyouContent key={idx} idx={idx} game={gameData} />
          }
        })
      }
      </>
    )
  }
}

const Content = () => {
  const [games, setGames] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    setIsPending(true);
    let url = "/src/games.json";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setGames(data);
          setIsPending(false);
          alert(" berhasil ");
        }, 1000);
      })
      .catch(err => alert(err))
  }, []);
  
  return(
    <>
      <div ref={containerRef} className="content">
        { isPending ? <div className="w-full h-[35vh] grid place-content-center"><Spinner /></div>:
          <SelectContent gameData={games} />
        }
      </div>
    </>
  )
}

export default Content
