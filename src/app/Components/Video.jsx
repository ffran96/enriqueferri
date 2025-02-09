import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function Video({ id, title, source, PosterImage }) {
  return (
    <LiteYouTubeEmbed
      key={title}
      id={source}
      title={title}
      poster="maxresdefault"
      wrapperClass={`w-[415px] aspect-[9/16] object-cover rounded-[12px] cursor-pointer`}
    />
  );
}
