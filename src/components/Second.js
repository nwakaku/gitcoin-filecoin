import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Web3Storage } from "web3.storage";
import videos from "../videos/even.mp4";
import { Link  } from "react-router-dom";

// const client = new Web3Storage({
//   token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyQmMzYmEyNEMwNzIyZUZkODg5NmIzOGQxYzI5ZWE0RUFiMjdiMjkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTE1ODA4MDYxNTcsIm5hbWUiOiJoYWNrYXRob24ifQ.dUoB7ul5STVdpTnRb_fy-s6ihD6hNUJ2qDevhE2Kk0A",
// });

function Second({ dataUrl }) {
//   const [fileUrl, setFileUrl] = useState([]);
  const [imageSrc, setImageSrc] = useState();
  const [hashes, setHashes] = useState([]);
  // const [nuxt, setNuxt] = useState();
  const [popUp, setPopUp] = useState(true);

  React.useEffect(() => {
    axios.get(`https://${dataUrl}`).then((response) => {
      setHashes(response.data);
    });
  }, [dataUrl]);



  return (
    <div className="App">
      <div className={ `${popUp ? 'popup' : 'popup active'}`} id="popup-1">
        <div className="overlay"></div>
        <div className="content">
          <div 
            className="close-btn" 
            onClick={() => {setPopUp(!popUp);setHashes('');}}>
            &times;
          </div>
          <h1>Hash Phrase</h1>
          <p>{`${ hashes }`}</p>
        </div>
      </div>



      <div className="starter">
        <h1 className="widget">
        <i class="fa-solid fa-droplet"></i>

DropIt</h1>
        <h3 className="widget"><Link to='/'>Login</Link></h3>
      </div>

      <div className="main">
        
      </div>

      {/* <div className="main">
        <Formik
          initialValues={{ video: "" }}
          onSubmit={(values, {resetForm}) => {
            onChange(values.video);
            console.log(values);
            resetForm({ values: "" });
          }}
        >
          {(formProps) => (
            <Form>
              <div className="nameSake">
                <input
                  className="video_files"
                  type="file"
                  onChange={(e) =>
                    formProps.setFieldValue("video", e.target.files[0])
                  }
                />
                <button className="video_submit" type="submit">
                  Upload
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div> */}

      <div className="videoSomething">
        <div className="container">
          <div className="main-video">
            <div className="video">
              {imageSrc ? (
                <video src={`https://ipfs.io/ipfs/${imageSrc}`} controls autoPlay />
              ) : (
                <video src={videos} controls loop autoPlay />
              )}

              <h3 className="title">something nice</h3>
            </div>
          </div>
          {/* const url = `https://ipfs.io/ipfs/${file.cid}`; */}

          {/* side videos */}
          <div className="video-list">
            {hashes.length !== 0 ? (
              hashes.map((url, index) => (
                <div
                  className="vid"
                  key={index}
                  onClick={() => setImageSrc(url)}
                >
                  <video src={`https://ipfs.io/ipfs/${url}`} autoPlay />
                  <h3 className="title">something nice</h3>
                </div>
              ))
            ) : (
              <h3>Please wait while videos load</h3>
            )}
          </div>
        </div>
      </div>

      {/* <footer className="footer">
        <button className="video_submit" onClick={() => {savePlayList();setPopUp(!popUp)}}>
          save playlist
        </button>
      </footer> */}
    </div>
  );
}

export default Second;