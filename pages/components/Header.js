import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setAnimating(true);
  };

  const handleClose = () => {
    setAnimating(true);
    setTimeout(() => {
      setOpen(false);
      setAnimating(false);
    }, 500); // Duration should match the slide-out animation duration
  };

  return (
    <div>
      <div className="flex header_component justify-between">
        <img className="logo_height" src="./lg.png" alt="logo" />
        {!open ? (
          <img
            className="header_menu_open"
            width="50"
            height="30"
            src="https://img.icons8.com/ios/50/menu--v7.png"
            alt="menu--v7"
            onClick={handleOpen}
          />
        ) : (
          <img
            onClick={handleClose}
            className="header_menu_close"
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/1A1A1A/circled-x.png"
            alt="circled-x"
          />
        )}
      </div>

      {animating && (
        <div
          className={`header_menu flex justify-between ${
            open ? "slide-in" : "slide-out"
          }`}
        >
          <div className="header_menu_selection">
            <p className="header_text_menu">HOME</p>
            <p className="header_text_menu">LISTING</p>
            <p className="header_text_menu">SERVICES</p>
            <p className="header_text_menu">MEDIA</p>
            <p className="header_text_menu">CONTACT</p>
          </div>

          <div className="contact_img">
            <center>
              <p>Follow Me On</p>
              <div className="flex gap-4 justify-center">
                <img
                  className="yt_icon"
                  width="50"
                  height="64"
                  src="https://img.icons8.com/glyph-neue/64/FFFFFF/youtube-play.png"
                  alt="youtube-play"
                />
                <img
                  className="instgram_icon"
                  width="50"
                  height="64"
                  src="https://img.icons8.com/glyph-neue/64/FFFFFF/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
                <img
                  width="47"
                  height="40"
                  className="fb_icon"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook--v1.png"
                  alt="facebook--v1"
                />
                <img
                  className="fb_icon"
                  width="50"
                  height="64"
                  src="https://img.icons8.com/glyph-neue/64/FFFFFF/twitter.png"
                  alt="twitter"
                />
              </div>
            </center>
          </div>
        </div>
      )}
    </div>
  );
}
