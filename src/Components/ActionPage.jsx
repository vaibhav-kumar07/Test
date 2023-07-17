import logo from '../Assests/Images/logo.png'
import Profile from '../Assests/Images/Profile.png'
import mic from '../Assests/Images/mic.png'
import search from '../Assests/Images/search.png'
import Hamburger from '../Assests/Images/Hamburger.png'
import Details from "../Components/Details"




export default function ActionPage () {
  return (
    <section className='Actionpage'>
      <div className='ActionpageNavbar'>
        <div className='Actionpagelogo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='ActionPage-input'>
          <div className='selection'>
            <select name='input' id='selectfield'>
              <option value='Rent'>Rent</option>
              <option value='Buy'>Buy</option>
            </select>
          </div>

          <div className='inputdiv'>
            <input type='text' placeholder='Search Place' className='inputfield'/>
          </div>
          <div className='micicons'>
            <img src={mic} alt='mic' />
          </div>
          <div className='inputicon'>
            <img src={search} alt='searchicon' />
          </div>
        </div>
        <div className='contactprofilesection'>
          <div className='buttondiv'>
            <button className='button'>Post property</button>
          </div>
          <div className='profileicons' >
            <img src={Profile} alt='Profile images' />
          </div>
          <div>
            <img src={Hamburger} alt='' />
          </div>
        </div>
      </div>
      <Details/>
    </section>
  )
}
