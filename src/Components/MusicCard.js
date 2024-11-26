/*import { useState } from "react";*/

export default function MusicCard({songDetail}) {

    /*const [isSongPlaying, setIsSongPlaying] = useState(songDetail.songPlayingStatus);

    const handlePlayPause = () => {
        if (!isSongPlaying) {
            setIsSongPlaying(true);
            songDetail.songPlayingStatus = true;
        } else {
            setIsSongPlaying(false);
            songDetail.songPlayingStatus = false;
        }
    }*/

    return(
        <div className='card mb-2'>
            <div className='row'>
                <div className='col-4'>
                    <img className='rounded-start' src={songDetail.songPoster} height="72px" width="106px" alt="song poster"/>
                </div>
                <div className='col-8'>
                    <div>
                        <p className="card-content mt-3">{songDetail.songName}</p>
                        <p className="card-content">({songDetail.songAlbum})</p>
                        <button style={{"appearance": "none", "border": "none"}}>
                        {!songDetail.songPlayingStatus?
                        <svg className="play-mini-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="20px" width="20px">
                            <path fill="#7A7C91" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                        </svg>:
                        <svg className="play-mini-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="20px" width="20px">
                            <path fill="#7A7C91" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
                        </svg>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}