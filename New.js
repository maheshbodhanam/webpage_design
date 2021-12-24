import React from 'react';
import './New.css';
import HomeIcon from '@mui/icons-material/Home';

const New = () => {
    return (
       
<div class="card">
    <div class="card-body">
    <div className="nav1">
    <ul class="nav">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#"><HomeIcon/></a>
    </li>
    </ul>
    </div>


    <ul class="nav justify-content-end">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Work</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Process</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">contact</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Careers</a>
    </li>
    </ul>

   
    


    



   </div>
   <div class="imgtext">
       
         
         <h2> Web Design and Develop</h2>
         <p>
         Web design is a multi-disciplinary job,where you'd need  <br/>
         design (typography, color theory) but also skills in  <br/>
         (HTML, CSS, JavaScript).
         </p>
         <button type="submit"> Contact Us</button>

         
       
       </div>

       <div class="about">
            <center>
              <h4>
                About Us
              </h4>
              <p>
         Web design is a multi-disciplinary job,where you'd need  <br/>
         design (typography, color theory) but also skills in  <br/>
         (HTML, CSS, JavaScript).
         </p>
            </center>
    
          </div>

          <div class="container"></div>
          <div className="skills">
            <h5>
              Professional Skills
            </h5>
            <div className="perc">
              UI/UX Design &nbsp;&nbsp;75%
              <hr/>
              Web Development &nbsp;&nbsp;90%
              <hr />
              Marketing &nbsp;&nbsp;65%
              <hr />
    
            </div>
            <div className="img2nd">
          <img src="https://media.istockphoto.com/photos/blank-screen-laptop-computer-on-white-wooden-table-with-living-room-picture-id1188340522?k=20&m=1188340522&s=612x612&w=0&h=w6fl-oFi-BnqgmYi-iY7zdqN4Gq0wZvNoYIJULh8gEE=" height="300px" width="500px"/>
          </div>
    
          </div>
    
         



   

   
</div>



   





            
        
    )
}

export default New;