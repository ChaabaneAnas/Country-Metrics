import { BiMicrophone } from 'react-icons/bi';
import { AiTwotoneSetting, AiOutlineArrowLeft } from 'react-icons/ai';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/"><AiOutlineArrowLeft /></Link>
    <h2> Country Metrics</h2>
    <BiMicrophone />
    <AiTwotoneSetting />
  </header>
);
export default Header;
