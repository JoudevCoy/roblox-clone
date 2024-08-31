import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChartSimple, faComments, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import avatarImg from "./../assets/avatar-me.jpg";

const BottomBar = () => {
  return (
    <>
      <div className="bottom-bar">
        <div className="container">
          <ul className="bar">
            <li className="bar-menu home active">
              <div><FontAwesomeIcon className="icon" icon={faHouse} /></div>
              <span>Beranda</span>
            </li>
            <li className="bar-menu highest">
              <div><FontAwesomeIcon className="icon" icon={faChartSimple} /></div>
              <span>Teratas</span>
            </li>
            <li className="bar-menu avatar">
              <img className="icon avatar" src={avatarImg} />
              <span>Avatar</span>
            </li>
            <li className="bar-menu chat">
              <div><FontAwesomeIcon className="icon" icon={faComments} /></div>
              <span>Pesan</span>
            </li>
            <li className="bar-menu other">
              <div><FontAwesomeIcon className="icon" icon={faEllipsis} /></div>
              <span>Lainnya</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default BottomBar;