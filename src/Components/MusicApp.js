export default function MusicApp({song}) {

    const handleClick = () => {
        alert("hi");
    }
    return(
        <div className="music-container">
            <audio src={song.songSource}></audio>
            <img className="music-poster" src={song.songPoster} height="200px" width="280px" alt="" />
            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#EBEDF3" className="bi bi-music-note-list playlist-button" viewBox="0 0 16 16">
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
                <path fill-rule="evenodd" d="M12 3v10h-1V3z"/>
                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
                <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
            </svg>

            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="music-details mb-5">
                <p className="music-title">{song.songName} (<span>{song.songAlbum}</span>)</p>
                <p className="music-artist">Artists - {song.songArtist}</p>
                <p className="music-composer">Composer - {song.songComposer}</p>
            </div>

            <div className="music-progress mb-4">
                <input type="range" className="music-progress-bar" />
                <div className="music-timer d-flex justify-content-between">
                    <div className="music-current-time">1:20</div>
                    <div className="music-total-time">{song.songDuration}</div>
                </div>
            </div>

            <div className="music-controller-icons d-flex justify-content-center">
                <svg className="my-auto mx-2" xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 320 512">
                    <path fill="#ffffff" d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96L0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-145 11.5 9.6 192 160z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" width="80px" viewBox="0 0 512 512" style={{"backgroundColor": "white", "border-radius": "50%"}}>
                    <path fill="#6de8ce" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/>
                </svg>

                <svg className="my-auto mx-2" xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 320 512">
                    <path fill="#fffffe" d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416L0 96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241l0-145c0-17.7 14.3-32 32-32s32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-145-11.5 9.6-192 160z"/>
                </svg>

                <div className="my-auto mx-5 volume-controller">
                    <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="32px" width="32px" viewBox="0 0 640 512">
                        <path fill="#fffffe" d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/>
                    </svg>
                    <input type="range" className="volume-adjust-bar my-auto"/>
                </div>
            </div>

        </div>
    );
}