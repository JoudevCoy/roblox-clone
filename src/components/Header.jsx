/** HEADER **/
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUserPlus, faCircle } from "@fortawesome/free-solid-svg-icons";
import avatarMe from "./../assets/avatar-me.jpg";
import avatarBoy from "./../assets/avatar-boy.jpg";
import avatarGirl from "./../assets/avatar-girl.jpg";

import users from "./../user.json";

const Header = () => {
  // AOS INIT
  useEffect(() => {
    AOS.init();
  }, [])
  
  const avatarRef = useRef([]);
  const friends = users;
  
  const lazyOpt = {
    root: null,
    rootMargin: "0px",
    threshold: .5
  }
  
  const lazyFunc = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.src = entry.target.dataset.src;
        entry.target.classList.remove("pending");
      }
    });
  }
  
  useEffect(() => {
    const lazyObs = new IntersectionObserver(lazyFunc, lazyOpt);
    if (avatarRef) {
      avatarRef.current.forEach(el => lazyObs.observe(el));
    }
    
    return () => {
      if (avatarRef) {
        avatarRef.current.forEach(el => lazyObs.unobserve(el));
      }
    }
  }, [avatarRef])
  
  let friendsList;
  const count = friends.length;
  
  if (friends.length > 0){
    friendsList = "Teman (" + count + ")";
  } else {
     friendsList = "Belum punya teman";
  }
  return(
    <>
      <div className="header">
        <div className="container">
          <div className="profile-info">
            <img src={avatarMe} />
            <span className="profile-name">Joxx</span>
          </div>
        </div>
        

        <div data-aos="fade-right" className="friends">
          <div className="container">
            <h1 className="friends-list">{friendsList}
              <span><FontAwesomeIcon icon={faArrowRight} /></span>
            </h1>
          </div>
          <div className="friends-wrap">
            <div className="friends-box">
              <div className="friends-circle">
                <span className="icon">
                  <FontAwesomeIcon icon={faUserPlus} />
                </span>
              </div>
              <div className="friends-status">
                <span className="title">Tambahkan teman</span>
              </div>
            </div>
            {
              friends.map((friend, index) =>
                <div className="friends-box" key={index}>
                  <div className="friends-circle">
                    <img className="pending" ref={(el) => (avatarRef.current[index] = el)} data-src={selectAvatar(friend.avatar)} />
                  </div>
                  <div className="friends-status">
                    <span className="name">
                      {friend.isActive ? <span className="status"><FontAwesomeIcon icon={faCircle} /></span> : <span></span>}
                      {friend.name}
                    </span>
                    { friend.playing.length > 13 ? <marquee scrollamount="3.5" className="activity">{friend.playing}</marquee> : <p className="activity">{friend.playing}</p> }
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  )
}

// Change avatar
const selectAvatar = (avt) => {
  if (avt == "avatarGirl"){
    return avatarGirl;
  } else if (avt == "avatarBoy"){
    return avatarBoy;
  } else {
    return avt;
  }
}

export default Header;