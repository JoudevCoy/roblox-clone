import avatarBoy from "./../assets/avatar-boy.jpg";
import avatarGirl from "./../assets/avatar-girl.jpg";

const AvatarImg = ({attrImg}) => {
  return (
    <>
      <img src={selectAvatar(attrImg)} />
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

export default AvatarImg;