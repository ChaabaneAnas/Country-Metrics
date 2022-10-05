import { BiMicrophone } from 'react-icons/bi'
import { AiTwotoneSetting } from 'react-icons/ai'
import React from 'react'
import { Link } from 'react-router-dom'
 const Header = () => {
  return(
    <div>
      <Link to="/">Go Back</Link>
      <span>Africa Bibel</span>
      <BiMicrophone/>
      <AiTwotoneSetting/>
    </div>
  )
}
export default Header