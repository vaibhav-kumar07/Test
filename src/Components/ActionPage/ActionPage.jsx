import  { useState, useEffect } from 'react';
import logo from '../Images/logo.png';
import profile from '../Images/profile.png';
import mic from '../Images/mic.png';
import search from '../Images/search.png';
import hamburger from '../Images/hamburger.png';
import Details from '../ActionPage/Details';
import Data from '../Data.json';


export default function ActionPage() {
  const [sortedData, setSortedData] = useState(Data);
  const [sortingOption, setSortingOption] = useState('');

  useEffect(() => {
    const sortData = () => {
      let sorted = [...Data];

      if (sortingOption === 'lowToHigh') {
        sorted.sort((a, b) => a.Prices - b.Prices);
      } else if (sortingOption === 'highToLow') {
        sorted.sort((a, b) => b.Prices - a.Prices);
      }

      setSortedData(sorted);
    };

    sortData();
  }, [sortingOption]);

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <section className="Actionpage">
      <div className="ActionpageNavbar">
        <div className="Actionpagelogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ActionPage-input">
          <div className="selection">
            <select name="input" id="selectfield">
              <option value="Rent">Rent</option>
              <option value="Buy">Buy</option>
            </select>
          </div>

          <div className="inputdiv">
            <input type="text" placeholder="Search Place" className="inputfield" />
          </div>
          <div className="micicons">
            <img src={mic} alt="mic" />
          </div>
          <div className="inputicon">
            <img src={search} alt="searchicon" />
          </div>
        </div>
        <div className="contactprofilesection">
          <div className="buttondiv">
            <button className="button">Post property</button>
          </div>
          <div className="profileicons">
            <img src={profile} alt="Profile images" />
          </div>
          <div>
            <img src={hamburger} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="sorting">
          <select name="input" id="selectfield" onChange={handleSortingChange} className="sort">
            <option value="">Sort</option>
            <option value="lowToHigh">Low To High</option>
            <option value="highToLow">High To Low</option>
          </select>
        </div>
      </div>
      {sortedData.map((data, index) => (
        <Details
          key={index}
          title={data.title}
          image={data.image}
          locations={data.locations}
          Prices={data.Prices}
          amenities={data.amenities}
          area={data.area}
          type={data.type}
          summary={data.summary}
        />
      ))}
    </section>
  );
}
