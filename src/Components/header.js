import { BiMicrophone } from 'react-icons/bi'
import { AiTwotoneSetting } from 'react-icons/ai'
import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom'

 const Header = () => {
  return(
    <header>
      <Link to="/"><AiOutlineArrowLeft/></Link>
      <h2> Country Metrics App</h2>
      <BiMicrophone/>
      <AiTwotoneSetting/>
    </header>
  )
}
export default Header