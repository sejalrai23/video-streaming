import React, { useState, useEffect } from 'react';
import "./main.css";
import axios from 'axios';
import { Row, Col } from "react-bootstrap";
import { GrPlayFill, GrBookmark } from "react-icons/gr";



const Main = () => {
  const [videoData, setVideoData]=useState([]);
  
  useEffect(async() => {
    let res = await axios({
      headers: { 'Access-Control-Allow-Origin': '*' },
      method: "get",
      url: 'http://localhost:5000/api',
      crossorigin: true
    });
    if(res.status==200){
      setVideoData(res.data);
      // console.log(res);
    }
  }, []);
   
  console.log(videoData);

  
  return (
    <>
      <div>
        <div className="navbar">
          <h3 className="nav-text">VIDEO PLAYER APP</h3>
        </div>
        <div className="background-image"></div>
        <Row className="mx-auto my-5" >
          {videoData.map(vid=>{
            return(
              <Col className=" my-2" md={4} sm={4}>
              <div className="morph">
                <img className="img-fluid movie-img" src={vid.poster} alt="movie" />
                <div className="morph-text">
                  <h4 >{vid.name}</h4>
                  <p>{vid.details} </p>
                </div>
                <div className="morph-icons">
                <div onClick={event =>  window.location.href=`http://localhost:5000/api/video/${vid.id}`}><GrPlayFill size={30}/></div>
                  <div><GrBookmark size={25} /></div>
                </div>
              </div>
            </Col>
            )
          })}
         
          </Row>
      </div>
    </>
  );
}

export default Main;