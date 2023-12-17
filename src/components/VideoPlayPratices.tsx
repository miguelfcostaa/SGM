import React, { useRef, useState } from 'react';
import YouTube from 'react-youtube';
import NavBar from './NavBar';

const VideoPlayPratices: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const opts = {
    height: '590',
    width: '1048',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const onReady = (event: { target: any }) => {
    // access to player in all event handlers via event.target
    console.log('onReady', event.target);
  };

  const onPlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div style={{ background: '#414141', position: 'absolute', height: '100%', width: '100%' }}>
      <NavBar />

      <div style={{ textAlign: 'center', marginTop: 100 }}>
        <YouTube
           videoId="wE1aY58YfEY"
           opts={opts}
           onReady={onReady}
           onPlay={() => setIsPlaying(true)}
           onPause={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
};

export default VideoPlayPratices;