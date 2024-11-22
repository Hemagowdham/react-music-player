import React, { useState, useEffect, useRef } from 'react';

export default function MusicApp({song}) {

    const currentAudio = useRef();
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);
    const [volume, setVolume] = useState(50);

    const handleClick = () => {
        alert("hi");
    }

    const handleAudioPlay = () => {
        if(currentAudio.current.paused) {
            currentAudio.current.play();
            setIsAudioPlaying(true);
        } else {
            currentAudio.current.pause();
            setIsAudioPlaying(false);
        }
    }

    return(
        <div className="music-container">
            <audio src={song.songSource} ref={currentAudio}></audio>
            <img className="music-poster" src={song.songPoster} height="200px" width="280px" alt="Music Poster" />
            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#EBEDF3" className="bi bi-music-note-list playlist-button" viewBox="0 0 16 16">
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
                <path fill-rule="evenodd" d="M12 3v10h-1V3z"/>
                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
                <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
            </svg>

            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="music-details mb-4">
                <p className="music-title">{song.songName} (<span>{song.songAlbum}</span>)</p>
                <p className="music-artist">Artists - {song.songArtist}</p>
                <p className="music-composer">Composer - {song.songComposer}</p>
            </div>

            <div className="music-progress mb-2">
                <input type="range" className="music-progress-bar" value={audioProgress} onChange={(event)=>{setAudioProgress(event.target.value)}}/>
                <div className="music-timer d-flex justify-content-between">
                    <div className="music-current-time">{audioProgress}</div>
                    <div className="music-total-time">{song.songDuration}</div>
                </div>
            </div>

            <div className="music-controls">
                <div className="music-controller d-flex justify-content-center">
                    <svg className="my-auto mx-2 prev-icon" xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 320 512">
                        <path fill="#ffffff" d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z"/>
                    </svg>

                    <img src={isAudioPlaying? "/images/pause-icon.png": "/images/play-icon.png"} height="60px" width="60px" alt="Pause icon" style={{"border-radius": "50%"}} onClick={handleAudioPlay}/>
                    {/*<img src="/images/play-icon.png" height="60px" width="60px" alt="Play icon" style={{"border-radius": "50%"}}/>*/}

                    <svg className="my-auto mx-2 next-icon" xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 320 512">
                        <path fill="#fffffe" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z"/>
                    </svg>
                </div>

                <div className="my-auto volume-controller">
                    <svg className="me-2 volume-icon" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 640 512">
                        <path fill="#fffffe" d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
                    </svg>
                    <input type="range" className="volume-adjust-bar my-auto" min="0" max="100" value={volume} onChange={(event)=>{setVolume(event.target.value)}}/>
                    <div className="volume-level">{volume}</div>
                </div>
            </div>
            <br />
        </div>
    );
}