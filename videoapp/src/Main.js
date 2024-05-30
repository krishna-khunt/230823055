
import React, { useState } from 'react';
import './Video.css';

import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import logo from './images/2.png';
import video1 from './assets/tmkoc3.mp4';

import video3 from './assets/TMKOC2.mp4';

import video2 from './assets/movie2.mp4';
import video4 from './assets/video1.mp4';

function Main() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(new Array(4).fill(false));
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);

    const handleVideoClick = (index) => {
        const updatedIsVideoPlaying = [...isVideoPlaying];
        updatedIsVideoPlaying[index] = !updatedIsVideoPlaying[index];
        setIsVideoPlaying(updatedIsVideoPlaying);
        setSelectedVideoIndex(index);
    };

    const videoData = [
        { src: video1, description: "Description 1", category: "Category A" },
        { src: video2, description: "Description 2", category: "Category B" },
        { src: video3, description: "Description 3", category: "Category A" },
        { src: video4, description: "Description 4", category: "Category C" },
        
    ];

    // Function to handle the "All" filter and each category
    const handleCategoryFilter = (category) => {
        setSelectedCategory(category);
        setSelectedVideoIndex(null); // Reset selected video index
    };

    // Filtered videoData based on selected category
    const filteredVideoData = selectedCategory
        ? videoData.filter(video => video.category === selectedCategory)
        : videoData;

    return (
        <>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#">
                    <img src={logo} className='icon' alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* Added onClick event for "All" filter and each category */}
                        <Nav.Link href="#home" onClick={() => handleCategoryFilter(null)}>All</Nav.Link>
                        <Nav.Link href="#categoryA" onClick={() => handleCategoryFilter("Category A")} >Comedy</Nav.Link>
                        <Nav.Link href="#categoryB" onClick={() => handleCategoryFilter("Category B")}>Movies</Nav.Link>
                        <Nav.Link href="#categoryC" onClick={() => handleCategoryFilter("Category C")}>Cartoon</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            <div className='container-fluid'>
                <div className='row'>
                   
                    <div className="col-9" style={{paddingTop:"90px"}}>
                        {/* Video displayed based on selected video index */}
                        {selectedVideoIndex !== null && (
                            <video src={filteredVideoData[selectedVideoIndex].src} style={{ height: '80%', width: '100%', marginTop: '-80px' , borderRadius: '10px',boxShadow:'5px 5px 5px black'}} controls />
                        )}
                        <div className="row">
                            {filteredVideoData.map((video, index) => (
                                <div key={index} className="col-3" style={{ marginBottom: '20px' }}>
                                    <div className="video-container" onClick={() => handleVideoClick(index)} >
                                        <video src={video.src} autoPlay={isVideoPlaying[index]} loop muted={!isVideoPlaying[index]} style={{ height: '200px', width: 'auto',boxShadow:'5px 5px 5px black' }} className="mapvideo" controls />
                                        <p>{video.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-2">    
                        <div className="slide">
                            <div className="col">
                                {/* Repeat the video */}
                                {filteredVideoData.map((video, index) => (
                                    <div key={index} className="video-container" onClick={() => handleVideoClick(index)}>
                                        <video src={video.src} autoPlay={isVideoPlaying[index]} loop muted={!isVideoPlaying[index]} style={{ height: '175px', width: '400px' ,boxShadow:'5px 5px 5px black'}} className="mapvideo" controls />
                                        <p>{video.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}

export default Main;
