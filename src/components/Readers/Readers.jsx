import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'


function Readers() {

  // useEffect(()=>{
  //   axios.get("https://localhost:7130/GetFileType")
  //   .then((response)=>{console.log(response.data)})
  // });

  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Replace 'your-api-endpoint' with the actual endpoint of your Web API
  //       const response = await fetch('https://localhost:7130/GetFileType');
        
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setApiData(data);
  //       console.log(data.GetFiletype);
  //     } catch (error) {
  //       console.error('Error fetching data:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array ensures the effect runs only once
  


  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);

  return (
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div class="card mt-3">
            <h5 class="card-header bg-success text-white">Select File Type</h5>
            <div class="card-body">
              <div className="row">
                <div className="col-1">
                  <button className='btn btn-success'>Switch</button>
                </div>




                <div>
      
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
      ))}
    </div>





              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div class="card mt-3">
            <h5 class="card-header bg-success text-white">Upload File DynamicFileType</h5>
            <div class="card-body">
              <div className="row">
                <div className="col-3">
                  <input class="form-control" type="file" id="formFile" />
                </div>
                <div className="col-3">
                  <button className='btn btn-success'>Upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Readers