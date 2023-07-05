import React from "react";

import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';



import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-footer">
      <div className="video-text">
        <h3>
          {channel} . ({song})
          <Button>
            <h4 style={{ color: "white" }}>Follow</h4>
          </Button>
        </h3>
      </div>
      {/*  */}
      <div className="footer-buttons">
        <div className="flex-box">
          <FavoriteIcon />
          {likes}
        </div>
        {/*  */}
        <div className="flex-box">
          <CommentIcon />
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <SendIcon />
          {shares}
        </div>
      </div>
    </div>
  );
}