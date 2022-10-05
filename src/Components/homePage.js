import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FetchCountires } from '../Redux/DetailsPage/DetailsPage';


const continentsData = [
  {
    id: uuidv4(),
    name: 'Africa',
    map: '',
    image: '',
  },
  {
    id: uuidv4(),
    name: 'Asia',
    map: '',
    image: '/images/Asia.svg',
  },
  {
    id: uuidv4(),
    name: 'Europe',
    map: '',
    image: '/images/Europe.svg',
  },
  {
    id: uuidv4(),
    name: 'Oceania',
    map: '',
    image: '/images/Oceania.svg',
  },
  {
    id: uuidv4(),
    name: 'North America',
    map: '',
    image: '/images/North America.svg',
  },
  {
    id: uuidv4(),
    name: 'South America',
    map: '',
    image: '/images/South America.svg',
  },
  {
    id: uuidv4(),
    name: 'Antarctica',
    map: '',
    image: '/images/Antarctica.svg',
  },
];

const Home = () => {
 const  dispatch = useDispatch()

return(
  <div>
    {continentsData.map((continent) => (
    <Link onClick={() => dispatch(FetchCountires(continent.name))} key = {continent.id} to={`/details/${continent.name}`}>
        <ul>
          <li>{continent.name}</li>
          <li>{continent.image}</li>
        </ul>
      </Link>
  
  ))}
  </div>
  
)
}

export default Home