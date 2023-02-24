import React from 'react';

import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa'; //FaHome
import { Link } from 'react-router-dom';


const Footer = () => {
  const creatorLinks = [
    {
      name: 'Anna Kononchenko',
      link: 'https://github.com/AnyaKononchenko',
    },
    {
      name: 'Berk Disli',
      link: 'https://github.com/berkdisli',
    },
    {
      name: 'Yevgeniy Tolkachev',
      link: 'https://github.com/yevgeniyT',
    },
  ];

  return (
    <footer className='footer'>
      <div className='footer-left flex-centered'>
        <Link to="/"><FaHome className='icon' /></Link>
      </div>
      <div className='footer-center flex-centered'>
        Created by: {creatorLinks.map((creator) => (
          <a href={creator.link} key={creator.name} target="_blank" rel="noopener noreferrer">{creator.name}</a>
        ))}
      </div>
      <div className='footer-right flex-centered'>
        <a href="https://www.youtube.com/watch?v=XxBuZMB-YZs&list=PLfpipp6KbWs4yvs7K287mBKxO7x7TSpvX" target="_blank" rel="noopener noreferrer"> <FaYoutube className='icon'/></a>
        <a href="https://www.instagram.com/rickandmortyrickstaverse/" target="_blank" rel="noopener noreferrer"><FaInstagram className='icon'/></a>
      </div>
    </footer>
  );
}

export default Footer;
