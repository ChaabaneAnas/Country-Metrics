
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FetchCountires } from '../Redux/DetailsPage/DetailsPage';
import continentsData from '../Data/Data';




const Home = () => {
 const  dispatch = useDispatch()

return(
  <div className='grid-container'>
    <div className="intro">
    <img src="./images/world.svg" alt=""></img>
    <div>
      <h3>The World</h3>
      <span>195 countries</span>
    </div>
  </div>
      {continentsData.map((continent) => (
        <Link onClick={() => dispatch(FetchCountires(continent.name))} key={continent.id} to={`/details/${continent.name}`}>
          <ul>
            <li>{continent.name}</li>
            <li><img src={continent.image} alt="contImgae" /></li>
          </ul>
        </Link>

      ))}
    </div>
  
)
}

export default Home