import './App.css';
import MusicApp from './Components/MusicApp';


function App() {

  const songList = [
    { id: 1,
      songName: "Katchi sera", 
      songAlbum: "Think Indie",
      songArtist: "Sai Abhyankkar", 
      songComposer:"Sai Abhyankkar",
      songPoster: "/images/images.jpeg", 
      songSource: "/songs/Katchi Sera.mp3", 
      songDuration: "3:01"},

    { id: 2,
      songName: "Anbil Avan", 
      songAlbum: "Vinnaithandi Varuvaya", 
      songArtist: "Vijay Prakash, Suzanne D'mello, Blaaze", 
      songComposer: "A.R. Rahman",
      songPoster: "/images/hosonnaposter.jpg",
      songSource: "/songs/Anbil-Avan.mp3", 
      songDuration: "4:12"},

    { id: 3,
      songName: "Millionaire", 
      songAlbum: "Glory",
      songArtist: "Yo Yo Honey Singh", 
      songComposer:"Yo Yo Honey Singh",
      songPoster: "/images/Millionaire.png", 
      songSource: "/songs/Millionaire.mp3", 
      songDuration: "3:19"},

    { id: 4,
      songName: "Chuttamalle", 
      songAlbum: "Devara",
      songArtist: "Shilpa Rao", 
      songComposer:"Anirudh Ravichander",
      songPoster: "/images/Chuttamalle.jpeg", 
      songSource: "/songs/Chuttamalle.mp3", 
      songDuration: "3:44"},

    { id: 5,
      songName: "Hunter Vantaar", 
      songAlbum: "Vettaiyan",
      songArtist: "Anirudh Ravichander, Siddharth Basrur, Arivu ft. Siddharth Basrur & Arivu", 
      songComposer:"Anirudh Ravichander",
      songPoster: "/images/hunter.jpeg", 
      songSource: "/songs/Hunter Vantaar.mp3", 
      songDuration: "3:12"},

    { id: 6,
      songName: "Apna Bana Le", 
      songAlbum: "Bhediya",
      songArtist: "Sachin-Jigar, Arijit Singh", 
      songComposer:"Sachin-Jigar",
      songPoster: "/images/apna bana le.jpg", 
      songSource: "/songs/Apna Bana le.mp3", 
      songDuration: "3:12"},

    { id: 7,
      songName: "Apna Bana Le", 
      songAlbum: "Bhediya",
      songArtist: "Sachin-Jigar, Arijit Singh", 
      songComposer:"Sachin-Jigar",
      songPoster: "/images/apna bana le.jpg", 
      songSource: "/songs/Apna Bana le.mp3", 
      songDuration: "3:12"},

    { id: 8,
      songName: "Apna Bana Le", 
      songAlbum: "Bhediya",
      songArtist: "Sachin-Jigar, Arijit Singh", 
      songComposer:"Sachin-Jigar",
      songPoster: "/images/apna bana le.jpg", 
      songSource: "/songs/Apna Bana le.mp3", 
      songDuration: "3:12"},
  ];
  const song = songList[0];
  
  return (
    <div className="App" id="main">
      <MusicApp song={song} songList={songList}/>
    </div>
  );
}

export default App;
