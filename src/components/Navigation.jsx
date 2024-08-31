/** NAVIGATION **/

// import logoRoblox from './../assets/ic_launcher_foreground.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faBell, faGem } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <h1 className="title">Beranda</h1>
          <div className="searchbar">
            <div className="search-box">
              <label className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </label>
              <input id="searchInput" className="search-input" type="text" placeholder="Cari" onInput={() => checkInput()}></input>
              <button id="undoInput" className="undo-input hidden" onClick={() => clearInput()}>
              Batalkan
                <label className="undo-area" onClick={() => clearInput()}></label>
              </button>
            </div>
          </div>
          <ul className="menu">
            <li className="robux">
              <FontAwesomeIcon icon={faGem} />
            </li>
            <li className="notification">
              <FontAwesomeIcon icon={faBell} />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

// check clear
const checkInput = () => {
  let srcInp = document.getElementById("searchInput"),
    undoInp = document.getElementById("undoInput");
  if (srcInp.value.length > 0){
    undoInp.classList.remove("hidden");
  } else {
    undoInp.classList.add("hidden");
  }
}

// clear input
const clearInput = () => {
  let srcInp = document.getElementById("searchInput"),
    undoInp = document.getElementById("undoInput");
  srcInp.value = "";
  undoInp.classList.add("hidden");
}

export default Nav