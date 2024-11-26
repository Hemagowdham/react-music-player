import React, { useState, useRef } from 'react';
import MusicCard from './MusicCard';

export default function MusicApp({songList}) {

    const currentAudio = useRef();
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);
    const [audioTotalTime, setAudioTotalTime] = useState("4:23");
    const [audioProgressTime, setAudioProgressTime] = useState("0:00");
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);

    const [nowPlayingSong, setNowPlayingSong] = useState(songList[0]);

    //Time convertion seconds to Minutes:Seconds Format
    const secondsToMinute = (time) => {
        let timeMinutes = Math.floor(time/60);
        let timeSeconds = Math.floor(time%60);
        if (timeSeconds < 10) {
            timeSeconds = "0" + timeSeconds;
        }
        return(timeMinutes+":"+timeSeconds);
    };

    //Audio time update Event Handler
    const handleAudioTimeUpdate = () => {
        //Sets Total time duartion of audio input
        setAudioTotalTime(secondsToMinute(currentAudio.current.duration));

        //Sets Progress time of audio input
        setAudioProgressTime(secondsToMinute(currentAudio.current.currentTime));

        //Sets Audio progress of audio input
        let audioProgress = Math.floor((currentAudio.current.currentTime/currentAudio.current.duration) * 100);
        
        setAudioProgress(isNaN(audioProgress)? 0: audioProgress);
    };

    //Music progress Change Event handler
    const handleMusicProgressBar = (event) => {
        setAudioProgress(event.target.value);
        currentAudio.current.currentTime = (event.target.value * currentAudio.current.duration) / 100;
    };

    //Audio play/pause Event handler
    const handleAudioPlay = () => {
        if(currentAudio.current.paused) {
            currentAudio.current.play();
            nowPlayingSong.songPlayingStatus = true;
            setIsAudioPlaying(true);
        } else {
            currentAudio.current.pause();
            nowPlayingSong.songPlayingStatus = false;
            setIsAudioPlaying(false);
        }
    };

    //Updates Now Playing Song by accessing Song List index
    const updateNowPlayingSong = (index) => {
        let songObject = songList[index];
        currentAudio.current.src = songObject.songSource;
        currentAudio.current.play();
        songObject.songPlayingStatus = true;

        setNowPlayingSong(songObject);
        setIsAudioPlaying(true);
    };

    //Play Next Event handler
    const handleNextSong = () => {
        //Now Playing Song Index
        let songIndex = nowPlayingSong.id - 1;
        //Next Song Index
        let newIndex = songIndex + 1;
        //console.log("New Index", newIndex);
        nowPlayingSong.songPlayingStatus = false;

        //Plays next song, loops when reaches maximum(Song List length) index
        if (newIndex <= (songList.length-1)) {
            updateNowPlayingSong(newIndex);
        } else {
            updateNowPlayingSong(0);
        }
    };

    //Play Prev Event handler
    const handlePreviousSong = () => {
        //Now Playing Song Index
        let songIndex = nowPlayingSong.id - 1;
        //Prev Song Index
        let newIndex = songIndex - 1;
        nowPlayingSong.songPlayingStatus = false;

        //Plays previous song, loops when reaches minimum(zero) index
        if (newIndex >= 0) {
            updateNowPlayingSong(newIndex);
        } else {
            updateNowPlayingSong((songList.length-1));
        }
    };

    //Volume adjust Event handler
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        //Sets current audio volume
        currentAudio.current.volume = volume/100;
    };

    //Volume mute handler - Function that handles music player's volume mute
    const handleVolumeMute = () => {
        if(!currentAudio.current.muted) {
            setIsMuted(true);
            currentAudio.current.muted = true;
        } else {
            setIsMuted(false);
            currentAudio.current.muted = false;
        }
    };

    return(
        <div className="music-container">
            <audio src={songList[0].songSource} ref={currentAudio} onTimeUpdate={handleAudioTimeUpdate}></audio>
            <img className="music-poster" src={nowPlayingSong.songPoster} height="200px" width="280px" alt="Music Poster" />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#EBEDF3" className="bi bi-music-note-list playlist-button" viewBox="0 0 16 16" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
                <path fillRule="evenodd" d="M12 3v10h-1V3z"/>
                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
                <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
            </svg>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel"><img className="app-logo" src="/images/logo.jpg" height="36px" width="36px" alt="App logo" title="MOOD, A Music App"/>  MUSIC (Playlist)</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {console.log("songs list", songList)}
                    {songList.map((songDetail) => <MusicCard key={songDetail.id} songDetail={{...songDetail}} />)}
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="music-details mb-4">
                <p className="music-title">{nowPlayingSong.songName} (<span>{nowPlayingSong.songAlbum}</span>)</p>
                <p className="music-artist">Artists - {nowPlayingSong.songArtist}</p>
                <p className="music-composer">Composer - {nowPlayingSong.songComposer}</p>
            </div>

            <div className="music-progress mb-2">
                <input type="range" className="music-progress-bar" value={audioProgress} onChange={handleMusicProgressBar} style={{"background" : `linear-gradient(to right, #9ECDC1 ${audioProgress}%, #7A7C91 ${audioProgress}%)`}}/>
                <div className="music-timer d-flex justify-content-between mt-1">
                    <div className="music-current-time">{audioProgressTime}</div>
                    <div className="music-total-time">{audioTotalTime}</div>
                </div>
            </div>

            <div className='music-controls'>
                <div className="music-controller d-flex justify-content-center">
                    <svg className="my-auto mx-2 prev-icon" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 320 512" onClick={handlePreviousSong}>
                        <path fill="#ffffff" d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z"/>
                    </svg>

                    <img src={isAudioPlaying? "/images/pause-icon.png": "/images/play-icon.png"} height="64px" width="64px" alt="Play/Pause icon" onClick={handleAudioPlay} style={{"borderRadius": "50%"}}/>

                    <svg className="next-icon my-auto mx-2" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 320 512" onClick={handleNextSong}>
                        <path fill="#fffffe" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z"/>
                    </svg>
                </div>

                <div className="volume-controller">
                    <button onClick={handleVolumeMute} style={{"background": "none", "border": "none"}}>
                        {isMuted? 
                        <svg className="me-2 volume-icon" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 576 512">
                            <path fill="#fffffe" d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                        </svg>: 
                        <svg className="me-2 volume-icon" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 640 512">
                            <path fill="#fffffe" d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
                        </svg>}
                    </button>
                    <input type="range" className="volume-adjust-bar my-auto" min="0" max="100" value={volume} onChange={handleVolumeChange}/>
                    <div className="volume-level my-auto ps-2">{volume}</div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}