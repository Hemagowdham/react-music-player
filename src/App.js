import './App.css';
import MusicApp from './Components/MusicApp';


function App() {

  const songsList = [
    {songName: "Katchi sera", songAlbum: "Think Indie",songArtist: "Sai Abhyankkar", songComposer:"Sai Abhyankkar", songSource: "/songs/Katchi Sera.mp3", songDuration: "3:01", songPoster: "/images/images.jpeg"},
    {songName: "Anbil Avan", songAlbum: "Vinnaithandi Varuvaya", songArtist: "Vijay Prakash, Suzanne D'mello, Blaaze", songComposer: "A.R. Rahman", songSource: "/songs/Anbil-Avan.mp3", songDuration: "3:01", songPoster: "/images/hosonnaposter.jpg"}
  ];
  const song = songsList[1];
  
  return (
    <div className="App">
      <MusicApp song={song} />
    </div>
  );
}

export default App;
