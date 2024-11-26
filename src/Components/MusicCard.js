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
                    <img className='rounded-start' src={songDetail.songPoster} height="60px" width="106px" alt="song poster"/>
                </div>
                <div className='col-8'>
                    <div>
                        <p className="card-content">{songDetail.songName} ({songDetail.songAlbum})</p>
                        <button style={{"appearance": "none", "border": "none"}}>
                        {!songDetail.songPlayingStatus?
                        <svg className="play-mini-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20px" width="20px">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"/>
                        </svg>:
                        <svg className="play-mini-icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20px" width="20px">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm224-72l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24zm112 0l0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>
                        </svg>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}