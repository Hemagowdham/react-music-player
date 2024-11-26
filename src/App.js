import './App.css';
import MusicApp from './Components/MusicApp';


function App() {

  const musicAPI = [
    { id: 1,
      songName: "Katchi sera", 
      songAlbum: "Think Indie",
      songArtist: "Sai Abhyankkar", 
      songComposer:"Sai Abhyankkar",
      songPoster: "/images/images.jpeg", 
      songSource: "/songs/Katchi Sera.mp3", 
      songPlayingStatus: false},

    { id: 2,
      songName: "Anbil Avan", 
      songAlbum: "Vinnaithandi Varuvaya", 
      songArtist: "Vijay Prakash, Suzanne D'mello, Blaaze", 
      songComposer: "A.R. Rahman",
      songPoster: "/images/hosonnaposter.jpg",
      songSource: "/songs/Anbil-Avan.mp3", 
      songPlayingStatus: false},

    { id: 3,
      songName: "Millionaire", 
      songAlbum: "Glory",
      songArtist: "Yo Yo Honey Singh", 
      songComposer:"Yo Yo Honey Singh",
      songPoster: "/images/Millionaire.png", 
      songSource: "/songs/Millionaire.mp3", 
      songPlayingStatus: false},

    { id: 4,
      songName: "Chuttamalle", 
      songAlbum: "Devara",
      songArtist: "Shilpa Rao", 
      songComposer:"Anirudh Ravichander",
      songPoster: "/images/Chuttamalle.jpeg", 
      songSource: "/songs/Chuttamalle.mp3", 
      songPlayingStatus: false},

    { id: 5,
      songName: "Hunter Vantaar", 
      songAlbum: "Vettaiyan",
      songArtist: "Anirudh Ravichander, Siddharth Basrur, Arivu ft. Siddharth Basrur & Arivu", 
      songComposer:"Anirudh Ravichander",
      songPoster: "/images/hunter.jpeg", 
      songSource: "/songs/Hunter Vantaar.mp3", 
      songPlayingStatus: false},

    { id: 6,
      songName: "Sirikkadhey", 
      songAlbum: "Remo",
      songArtist: "Anirudh Ravichander, Arjun Kanungo, Srinidhi Venkatesh", 
      songComposer:"Anirudh Ravichander",
      songPoster: "/images/sirikadhey.jpeg", 
      songSource: "/songs/sirikkadhey.mp3", 
      songPlayingStatus: false},

    { id: 7,
      songName: "Adada", 
      songAlbum: "Raja Rani",
      songArtist: "G. V. Prakash Kumar", 
      songComposer:"G. V. Prakash Kumar",
      songPoster: "/images/adada.jpeg", 
      songSource: "/songs/adada.mp3", 
      songPlayingStatus: false},

    { id: 8,
      songName: "Naadaniyan", 
      songAlbum: "Compositions Of Melody",
      songArtist: "Jiojimi, Naziya K.", 
      songComposer:"Akshath",
      songPoster: "/images/Naadaniyan.jpeg", 
      songSource: "/songs/Nadaaniyan.mp3", 
      songPlayingStatus: false},
  ];
  
  return (
    <div className="App" id="main">
      <MusicApp songList={musicAPI}/>
    </div>
  );
}

export default App;
