import './Video.css';
//import { IoSearchOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import menu from './images/menu.jpg';
import logo from './images/2.png';
function Video() {
  return (
    <>
        <div>
            {/* nav bar */}
            <div className="nav">
                <img src={menu} className='icon'/>
                <img src={logo} className='icon'/>
                <form className="search">
                  <input type="search" className="input-search" placeholder="Search" />
                  <FaSearch  className="nav-icon"/>
                </form>
               
            </div>
        </div>
    </>
  );
}

export default Video;
 