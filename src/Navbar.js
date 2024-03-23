// import logo from './logo.svg';
import './App.css';



function Navbar(props) {
  return (
    <>
        <div>
          <p style={{"paddingBottom":"15px","width":"30%"}}>
            <img src={props.img} alt="Myimage" style={{"height":"30px","width":"40px","float":"left","marginRight":"15px","marginBottom":"0" ,"paddingRight":"20px"}}/>
            <span style={{"color":"black"}}>{props.text}</span>
            <br></br>
          </p>
        </div>
    </>
  );
}

export default Navbar;

