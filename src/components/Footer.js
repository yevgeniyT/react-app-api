// const Footer = () => {
//     return ( 
//         <footer>Footer</footer>
//      );
// }
 
// export default Footer;

import React from 'react';

import {FaYoutube} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

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
    <footer>
      <div>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"> <FaYoutube/></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
      </div>
      <div>
        Created by: {creatorLinks.map((creator) => (
          <a href={creator.link} key={creator.name} target="_blank" rel="noopener noreferrer">{creator.name}</a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
