// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
// images
import myImage from './images/feed.png';
import myImage2 from './images/explore.png';
import myImage3 from './images/favourite.png';
import myImage4 from './images/group1.png';
import myImage5 from './images/favourite.png';
import myImage6 from './images/message.png';
import myImage7 from './images/setting.png';


function App(props) {
  return (
    <>
        <Navbar text="Feed" img={myImage}/>
            <Navbar text="Explore" img={myImage2}/>
            <Navbar text="MarketPlace" img={myImage3}/>
            <Navbar text="Groups" img={myImage4}/>
            <Navbar text="My Favorites" img={myImage5}/>
            <Navbar text="Messages" img={myImage6}/>
            <Navbar text="Settings" img={myImage7}/>
    </>
  );
}

export default App;
