import logo from './Images/logo.png';
import support from './Images/support.png';
import profile from './Images/profile.png';
import Banner from './Images/Banner.jpg';

export default function Navbar() {
  return (

<>
        <section className="Navbar">
        <div className="logo">
            <img src={logo} alt="image" />
          </div>
          <div className="listitems">
            <ul>
              <li>For Buyers</li>
              <li>For Tenants</li>
              <li>For Owners</li>
              <li>For Dealers /Builders</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="button">
            <button>Post property</button>
          </div>
          <div className="iconitems">
            <div className="supporticon">
              <img src={support} alt="supprt" />
            </div>
            <div className="profileicon">
              <img src={profile} alt="profile" />
            </div>
          </div>
      
        </section>
        <div className='Banner'>  <img src={Banner} alt="Bannerimage" /></div>
      
    </>
  );
}
