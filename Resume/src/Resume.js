import './Resume.css';
import img1 from './images/call.jpg';
import img2 from './images/email.JPG';
import img3 from './images/link.jpg';
import img4 from './images/location.jpg';
import img5 from './images/year.jpg';
import img6 from './images/buliding.jpg';
import img7 from './images/manag.jpg';
import img8 from './images/market.jpg';
import img9 from './images/work.jpg';


function Resume() {
    return (
  <>
     { /*header*/}
     <div class="container" style={{"border": "1px solid black"}}>
     <div style={{"margin-bottom":"20px"}}></div>

      <div>
        <h1>DENVER DAHL</h1>
        <h3 className="title">Account Manager</h3>
        <p className="header">
          <img src={img1} style={{"height":"14px","width":"20px"}}alt=""/>
          +1 555 555 5555
        </p>
        <p className="header">
          <img src={img2} style={{"height":"14px","width":"20px"}}  alt=""/>
          denver.dahl@example.com
        </p>
        <p className="header">
          <img src={img3} style={{"height":"14px","width":"20px"}} alt=""/>
          linkdin.com/denver-dahl
        </p>
        <p className="header">
          <img src={img4} style={{"height":"14px","width":"20px"}} alt=""/>
           San Francisco,CA
        </p>
      </div>

     { /*titel1*/}
     <div>
     <h2 style={{"border-bottom":"2px black solid","margin-top":"30px"}}>EXPERIENCE</h2>
    </div>
    <div>
        <h4>
            Key Account Manager
        </h4>
        <h5 className="title">
            Lauzon
        </h5>
        <p className="header">
             <img src={img5} style={{"height":"14px","width":"20px"}} alt=""/>
            2016-Ongoing
        </p>

        <p className="header">
             <img src={img4} style={{"height":"14px","width":"20px"}} alt=""/>
            San Francisco,CA
        </p>
        <ul>
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit,
            <li>Etiam quis tortor eleifend, tempor ante ut, molestie justo ...
            </li>
            <li>
            Lorem Ipsum. "Neque porro quisquam est qui dolorem ...
            </li>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>
            Aliquam id risus ac eros vestibulum molestie.
            </li>
        </ul>
        <p style={{"border":"1px black dashed","borderBottom":"10px"}}></p>
  
    </div>
    
    <div>
        <h4>
            Senior Account Manager
        </h4>
        <h5 className="title">
            Koepp Inc
        </h5>
        <p className="header">
              <img src={img5} style={{"height":"14px","width":"20px"}} alt=""/>

            2014-2016
        </p >

        <p className="header">
                <img src={img4} style={{"height":"14px","width":"20px"}} alt=""/>
            San Francisco,CA
        </p>
        <ul>
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit,
            <li>Etiam quis tortor eleifend, tempor ante ut, molestie justo ...
            </li>
            <li>
            Lorem Ipsum. "Neque porro quisquam est qui dolorem ...
            </li>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>
            Aliquam id risus ac eros vestibulum molestie.
            </li>
        </ul>
        <p style={{"border":"1px black dashed","borderBottom":"10px"}}></p>  
    </div>
      <div>
      <h4>
           Account Manager Infrastructure & Application Development
        </h4>
        <h5 className="title">
            Drouin S.A.R.L
        </h5>
        <p className="header">
                <img src={img5} style={{"height":"14px","width":"20px"}} alt=""/>
            2014-2016
        </p>

        <p className="header">
                <img src={img4} style={{"height":"14px","width":"20px"}} alt=""/>
            San Francisco,CA
        </p>
        <ul>
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit,
            <li>Etiam quis tortor eleifend, tempor ante ut, molestie justo ...
            </li>
            <li>
            Lorem Ipsum. "Neque porro quisquam est qui dolorem ...
            </li>
            <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li>
            Aliquam id risus ac eros vestibulum molestie.
            </li>
        </ul>
      </div>
      
        <div>     
         { /*titel2*/}
        </div>

    <div>
        <h2 style={{"border-bottom":"2px black solid","margin-top":"30px"}}>EDUCATION</h2>
       
    </div>

    <div>
        <h3>
            Master of Marketing Management
        </h3>
        <h5 className="title">
            La Trobe University
        </h5>
        <p className="header">
              <img src={img5} style={{"height":"14px","width":"20px"}} alt=""/>
            2014-2016
        </p>

        <p className="header">
                 <img src={img4} style={{"height":"14px","width":"20px"}} alt=""/>
            San Francisco,CA
        </p>
    </div>

    <div>    
     { /*titel3*/}
    </div>
    <div>
    <h2 style={{"border-bottom":"2px black solid","margin-top":"30px"}}>EXPERIENCE</h2>
         <div class="text-center">
            <div class="row">
                 <div class="col-6">
                     <img src={img6} style={{"height":"30px","width":"45px"}} alt=""/>
                            <h2>Building the future</h2>
                             <p style={{ "borderBottom":"3px dashed gray"}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                    </div>
                    <div class="col-6">
                       <img src={img7} style={{"height":"30px","width":"45px"}} alt=""/>
                                <h2>Managing the largest accounts</h2>
                                <p style={{ "borderBottom":"3px dashed gray"}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                    </div>
                                    
                    <div class="w-100 d-none d-md-block"></div>

                            <div class="col-6">
                            <img src={img8} style={{"height":"30px","width":"45px"}} alt=""/>
                                <h2>Market share - Key accounts & projects</h2>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div class="col-6">
                            <img src={img9} style={{"height":"30px","width":"45px"}} alt=""/>
                                <h2>Work-life balance</h2>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                </div>
            </div>


    <div>    
     { /*titel3*/}
    </div>

    <div>
        <h2 style={{"border-bottom":"2px black solid","margin-top":"30px"}}>SKILLS</h2>
        
    </div>
    <div>
        <h6 className="skill">
            MS Office Programs        
        </h6>
        <h6 className="skill1">
             Windows & Mac OSX     
        </h6>
        <h6 className="skill1" >
             Asana  
        </h6>
        <h6 className="skill1" >
             Salesforce
        </h6>
        <h6 className="skill1">
             Agile
        </h6>
        <h6 className="skill1">
             CRM Systems
        </h6>
        <h6 className="skill1">
             Linkdin Sales Navigator
        </h6>
        <h6 className="skill1">
             Dun & Bradstreet
        </h6>
    </div>

    <div>    
     { /*titel3*/}
    </div>

    
    <div>
        <h2 style={{"border-bottom":"2px black solid","margin-top":"30px"}}>EXPERIENCE</h2>
                <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <h2 style={{"marginRight":"50px","float":"left"}}>English</h2>
                                <p style={{"marginRight":"50px","paddingTop":"15px"}}>Native</p>
                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{"width":"100%"}}></div>
                                </div>
                            </div>
                            <div class="col" >
                                <h2 style={{"marginRight":"50px","float":"left"}}>German</h2>
                                <p style={{"marginRight":"50px","paddingTop":"15px"}}>Proficient</p>
                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{"width":"75%"}}></div>
                                </div>
                            </div>
                            <div class="col" >
                                <h2 style={{"marginRight":"50px","float":"left"}}>Greek</h2>
                                <p style={{"marginRight":"50px","paddingTop":"15px"}}>Advanced</p>
                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar" style={{"width":"25%"}}></div>
                                </div>
                            </div>
                        </div>
                </div>
         </div>
         <div style={{"margin-bottom":"20px"}}></div>
    </div>
    </>
      
    );
  }
  

  export default Resume;
  