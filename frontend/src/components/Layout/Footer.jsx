import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Amanat.</div>
<div>
  <Link to={'https://github.com/Amanatsingh'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/630_amanat/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'https://www.linkedin.com/in/amanat-singh-85b85825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/realamanatsingh?igsh=dmN5cWt0d3VpOGRn'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer