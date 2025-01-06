import React, { Component } from "react";
import './slam.css'
class Slam extends Component{
    render()
    {
        return(
            <>
            <div class="box">
                <form>
                <div className="center-container">
                <label> <h2> SLAMBOOK </h2> </label>
                </div>

                    <label>NAME:  </label>
                    <input type="text" id="name"></input><br/><br/>
                    <label>NICKNAME:  </label>
                    <input type="text" id="nickname"></input><br/><br/>
                    <label>DOB:  </label>
                    <input type="date" id="DOB"></input><br/><br/>
                    <label>COLLEGE:  </label>
                    <input type="text" id="college"></input><br/><br/>
                    <label>ADDRESS:  </label>
                    <input type="text" id="address"></input><br/><br/>
                    <label>PHONE:  </label>
                    <input type="text" id="phone"></input><br/><br/>
                    <label>MEMORIES:</label>
                    <label htmlFor="memories"></label>
                    <br />
<textarea
  id="memories"
  name="memories"
  rows="5"
  cols="30"
  placeholder="Write your memories here..."
></textarea>
<br />
<br />
                    <label>GENDER:  </label><br/>
                    <input type="radio" name="gender" value="male" />Male<br/>
                    <input type="radio" name="gender" value="female" />Female<br></br>
                    <label>FAVOURITE ACTORS:  </label><br/>
                    <input type="checkbox" value="Vijay" />Vijay<br/><br/>
                    <input type="checkbox" value="Ajith" />Ajith<br/><br/>
                    <input type="checkbox" value="Dhanush" />Dhanush<br/><br/>
                    <input type="checkbox" value="Allu Arjun" />Allu Arjun<br/><br/>
                    <input type="checkbox" value="SivaKarthikeyan" />SivaKarthikeyan<br/><br/>
                    <label>WRITE ABOUT ME:  </label>
                    <label htmlFor="Write about me"></label>
<br />
<textarea
  id="Write about me"
  name="Write about me"
  rows="5"
  cols="30"
  placeholder="Write about me here..."
></textarea>
<br />
<br />
                    
                </form>
            </div>
            </>
        )
    }
}
export default Slam
