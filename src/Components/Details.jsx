/* eslint-disable react/prop-types */

export default function Details (props) {
  return (
    <section className='detailpage'>
      <div className='leftside'>leftside</div>
      <div className='productdetailsection'>
        <div className='homesimage'>
          <img src={props.image} alt='image' />
        </div>
        <div className='homedetail'>
          <div className='homeheader'>
            <div className='hometitle'>
              <h2>{props.title}</h2>
            </div>
            <div className='placesnearby listitem'>
              <ul>
                <li>{props.locations[0]}</li>
                <li>{props.locations[1]}</li>
                <li>{props.locations[2]}</li>
                <li>{props.locations[3]}</li>
              </ul>
            </div>
            <div className='homeprices listitem'>
              <ul>
                <li>{props.Prices}cr</li>
                <li>{props.area}</li>
                <li>{props.type}</li>
              </ul>
            </div>
            <div className='facingdetails listitem'>
              <ul>
                <li>{props.amenities[0]}</li>
                <li>{props.amenities[1]}</li>
                <li>{props.amenities[2]}</li>
                <li>{props.amenities[3]}</li>
              </ul>
            </div>
            <div>
              <h4 className='summary'>{props.summary}</h4>
            </div>
            <div className='phonenumber'>
              <h2>View Phone Number</h2>
              <button>Contact Dealer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
