import React from 'react'

export default function About() {
  return (
    <>
    <div className='container text-info' id='about'>
      <img className="rounded mx-auto d-block" src="mypic.jpg" alt="Picture - Mohammed Furquan" style={{height:"38vw", width:"65vw",}}/>
      <h2 className='my-5 text-center text-info' >About Me</h2>
      <p className='my-3 fs-5'style={{color:"#b5f7ff"}}> I'm Mohammed Furquan, a final year stundet of Bsc.Computer Science from SRTMUN. My passion lies in web development, and I have a strong foundation in HTML, CSS, JavaScript, and React.js. Currently, I am focused on mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack for building robust and scalable web applications. <br/>
      During my academic journey, I developed a keen interest in creating engaging and user-friendly web experiences. I enjoy the challenge of translating ideas into functional and aesthetically pleasing websites. My goal is to leverage my skills and knowledge to craft innovative solutions that solve real-world problems.<br/>
      Apart from coding, I am an avid learner who enjoys staying updated with the latest technologies and trends in web development. I am excited to contribute to meaningful projects and collaborate with like-minded professionals to create impactful digital experiences.<br/>
      Feel free to explore my portfolio and projects to learn more about my work and journey in web development!</p>
     </div>
      <div className="container bg-dark my-4">

      <h2 className='text-center text-info my-4'>Academic Details </h2>
      <table className=" table color-info table-dark" style={{color:"#b5f7ff"}}>
  <thead>
    <tr className='text-info'>
      <th scope="col"className='text-info'>Qualification</th>
      <th scope="col"className='text-info'>Grade</th>
      <th scope="col"className='text-info'>Passing-year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"style={{color:"#b5f7ff"}}> Bsc(Computer Science)</th>
      <td style={{color:"#b5f7ff"}}>Not Applicable</td>
      <td style={{color:"#b5f7ff"}}>2024(Expected)</td>
  
    </tr>
        <tr>
          <th scope="row"style={{color:"#b5f7ff"}}>HSC</th>
          <td style={{color:"#b5f7ff"}}>47.38</td>
          <td style={{color:"#b5f7ff"}}>2020</td>

        </tr>
        <tr>
          <th scope="row"style={{color:"#b5f7ff"}}>SSC</th>
          <td style={{color:"#b5f7ff"}} >64.20</td>
          <td style={{color:"#b5f7ff"}}>2018</td>
        </tr>
        </tbody>
      </table>
      </div>
      <div className="container text-center">
  <h2 className='text-info my-5'>Skills</h2>
      <div className="row">
        <div className="col-md-3">
          <p className='fs-5 text-white'>HTML</p>
        </div>
        <div className="col-md-9">
          <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: "85%"}}></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <p className='fs-5 text-white'>CSS</p>
        </div>
        <div className="col-md-9">
          <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success text-white" style={{width: "70%"}}></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <p className='fs-5 text-white'>JavaScript</p>
        </div>
        <div className="col-md-9">
          <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success text-white" style={{width: "65%"}}></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <p className='fs-5 text-white'>Bootstrap</p>
        </div>
        <div className="col-md-9">
          <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: "70%"}}>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <p className='fs-5 text-white'>ReactJs</p>
        </div>
        <div className="col-md-9">
          <div className="progress" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: "67%"}}>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <p className='fs-5 text-white'>Java</p>
        </div>
        <div className="col-md-9">
          <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: "50%"}}>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <p className='fs-5 text-white'>C/C++</p>
        </div>
        <div className="col-md-9">
          <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: "60%"}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  


    </>
  ) 
}
