import React, { Component, useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMagic, faStop, faIn } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


const App = () => {
  const audioPlayer = useRef();
  const audioPlayerWithMagic = useRef();
  const [magic, setMagic] = useState(false);
  const [playing, setPlaying] = useState(false);

  const playSong = () => {
    setPlaying(!playing);
  };
  useEffect(() => {
    const player = magic ? audioPlayerWithMagic : audioPlayer;

    if (playing) {
      player.current.play();
    } else {
      player.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    if (magic) {
      audioPlayer.current.pause();

      audioPlayerWithMagic.current.currentTime = audioPlayer.current.currentTime;
      if (playing) {
        audioPlayerWithMagic.current.play();
      }
    } else {
      audioPlayerWithMagic.current.pause();

      audioPlayer.current.currentTime = audioPlayerWithMagic.current.currentTime;
      if (playing) {
        audioPlayer.current.play();
      }
    }
  }, [magic]);

  return (
    <div className="App">
      <div className="App-header">
        <audio ref={audioPlayer} src="demo1.mp4" crossOrigin="anonymous" preload="auto" />
        <audio ref={audioPlayerWithMagic} src="demo1.mp4" crossOrigin="anonymous" preload="auto" />
        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center'
        }}>
          <FontAwesomeIcon
            icon={!playing ? faPlay : faStop}
            onClick={playSong}
            style={{
              margin: '0 2.5rem',
              fontSize: '130px',
              display: 'flex'
            }}
          />
          <FontAwesomeIcon style={{
            margin: '0 2.5rem',
            color: magic ? 'green' : 'grey',
            fontSize: '130px',
            cursor: 'pointer',
            transition: 'all 500ms ease-out',
            display: 'flex'
          }} icon={faMagic} onClick={() => setMagic(!magic)} />
        </div>
      </div>
      <p className="App-intro">
        This is <b>Cuky</ b> he will rock you!
      </p>
      <a href="https://www.instagram.com/ft.cuki/?hl=es-la" target="_blank" style={{
            margin: '1rem',
            fontSize: '60px',
            position: 'absolute',
            bottom: '0',
            right: '0'
        }}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
  );
}

export default App;
