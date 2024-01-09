import React from "react";
import "./Style.css";
import BannerImg from "../assets/fortnite-pictures-b5kfcchwazwiz3cs 1.jpg";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-heading">
        <p>
          Epic Games: An American video game and software developer and
          publisher based in Cary, North Carolina.
        </p>
      </div>
      <img src={BannerImg} alt="" className="banner-image" />
      <div className="banner-description">
        <p>
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator-made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </p>
      </div>
      <div>
        <button type="submit" className="submit-button">
          Visit Website
        </button>
      </div>
    </div>
  );
};

export default Banner;
