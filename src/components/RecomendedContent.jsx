import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import LinesEllipsis from "react-lines-ellipsis";


const RecomendedContent = ({ game, idx }) => {
  
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])
  
  return (
    <>
    <div className="container">
      <div data-aos="zoom-in-up" key={idx} className="content-wrap">
        <h1 className="content-title">Rekomendasi untuk kamu</h1>
        <div className="rec-game-wrap">
          {
          // Game Box
          game[idx].content.map((el, _idx) => 
            <div data-aos="zoom-in" data-aos-delay="50" id={"game-"+idx} key={_idx} className="rec-game">
              <img id={"img-"+_idx} src={el.game_thumb} className="game-thumb" />
              <h1 className="game-name">
                <LinesEllipsis
                  text={el.game_title}
                  maxLine="1"
                  ellipsis="..."
                  trimRight={true}
                  basedOn="words"
                />
              </h1>
              <span className="game-info">
                {
                  el.info.ratings ?
                    <p className="game-ratings">
                      <FontAwesomeIcon icon={faThumbsUp} />
                      <span>Rating {el.info.ratings}%</span>
                    </p> : <p></p>
                }
                {/*
                  el.info.playing ?
                    <p className="game-users-playing">
                      <FontAwesomeIcon icon={faUser} />
                      <span>32</span>
                    </p> : <p></p>
                */}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default RecomendedContent;