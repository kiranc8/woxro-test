import React from 'react';
import Image1 from '../assets/5daa24d7cc4a0a62650c6b28 1.jpg';
import Image2 from '../assets/maxresdefault 1.jpg';
import Image3 from '../assets/Fortnite_20180630171046 1.jpg';
import './Style.css';

const Rawpost = () => {
  return (
    <div className='rowpost-container'>
      <div className='rowpost-card'>
        <img src={Image1} alt="img1" className="post-image" />
        <p>Explore large, destructible environments where no two games are ever the same.</p>
      </div>
      <div className='rowpost-card'>
        <img src={Image2} alt="img2" className="post-image" />
        <p>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
      </div>
      <div className='rowpost-card'>
        <img src={Image3} alt="img3" className="post-image" />
        <p>Discover even more ways to play across thousands of creator-made game genres</p>
      </div>
    </div>
  );
};

export default Rawpost;
