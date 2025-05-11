// src/components/AudioPlayer.jsx
import React from 'react';

const Sounds = () => {
  return (
    <div>
      <audio controls autoPlay loop>
        <source src="../assets/PokeMMO.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Sounds;
