/* eslint-disable react/prop-types */


import mic from "./Images/mic.png";
import location from "./Images/location.png";
import search from "./Images/search.png";



export default function Search(props) {

 

  return (
    <>
     
        <section className="searchbox">
          <div className="searchbox-listitems">
            <ul>
              <li>Buy</li>
              <li>Rent</li>
              <li>PG / Co-living</li>
              <li>Commercial</li>
              <li>CoWorking</li>
              <li>Plots/Lands</li>
              <li>Projects</li>
            </ul>
          </div>

          <div className="search-box-container">
            <div className="All-residential">
              <h4>All Residential</h4>
            </div>
            <div className="input-div">
              <img src={search} alt="searchicon" />
              <input type="text" placeholder="Search Places" className="" />
            </div>
            <div className="SearchIcons">
              <div className="icons">
                <img src={mic} alt="mic" />
              </div>
              <div className="icons">
                <img src={location} alt="location" />
              </div>
              <div className="searchbutton">
              <button onClick={props.onSearchClick}>Search</button>
              </div>
            </div>
          </div>
        </section>
      
    </>
  );
}
