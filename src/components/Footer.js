// const Footer = () => {
//     return ( 
//         <footer>Footer</footer>
//      );
// }
 
// export default Footer;

import React from 'react';

import {FaYoutube} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaHome} from 'react-icons/fa'; //FaHome
import './Footer.css';


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
        <div className='container'>
            <div className='fotter-left center'>
            <a href="/"><FaHome/></a>
            </div> 
            <div className='footer-center center'>
                Created by: {creatorLinks.map((creator) => (
                <a href={creator.link} key={creator.name} target="_blank" rel="noopener noreferrer">{creator.name}</a>
                ))}
            </div>
            <div className='footer-right center'>
                <a href="https://www.youtube.com/watch?v=XxBuZMB-YZs&list=PLfpipp6KbWs4yvs7K287mBKxO7x7TSpvX" target="_blank" rel="noopener noreferrer"> <FaYoutube/></a>
                <a href="https://www.instagram.com/rickandmortyrickstaverse/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
