import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import LinesEllipsis from "react-lines-ellipsis";

const ContinueContent = ({game, idx}) => {
  
  useEffect(() => {
    AOS.init({
      once: true
    });
  }, [])
  
  return (
    <>
      <div className="content-wrap">
        <div className="container">
          <h1 className="content-title">Lanjutkan</h1>
        </div>
        <div data-aos="zoom-in-up" className="cont-game-wrap">
          {
          // Game Box
          game[idx].content.map((el, _idx) => 
            <div id={"game-"+idx} key={_idx} className="cont-game">
              <img id={"img-"+_idx} src={el.game_thumb} className="game-thumb" />
              <h1 className="game-name">
                <LinesEllipsis
                  text={el.game_title}
                  maxLine="2"
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
                      <span>{el.info.ratings}%</span>
                    </p> : <p></p>
                }
                {
                  el.info.playing ?
                    <p className="game-users-playing">
                      <FontAwesomeIcon icon={faUser} />
                      <span>{el.info.playing}</span>
                    </p> : <p></p>
                }
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ContinueContent;