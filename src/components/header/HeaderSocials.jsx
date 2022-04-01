import React from "react";
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nicholas23smith/" target="blank"><BsLinkedin/></a>
      <a href="https://github.com/smithereens23nas" target="blank"><FaGithub /></a>
      <a href="mailto: nicholas23smith@gmail.com" target="blank"><AiOutlineMail /></a>
    </div>
  );
};

export default HeaderSocials;
