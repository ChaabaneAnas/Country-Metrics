import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FetchCountires } from '../Redux/DetailsPage/DetailsPage';
import continentsData from '../Data/Data';

const Home = () => {
  const dispatch = useDispatch();

  return (

    <>
      <div className="intro">
        <img src="./images/world.svg" alt="" />
        <div>
          <h4>The World</h4>
          <span>195 countries</span>
        </div>
      </div>
      <h3>STATS BY CONTINENT</h3>
      <div className="cards-container">
        {continentsData.map((continent) => (
          <Link className="card" onClick={() => dispatch(FetchCountires(continent.name))} key={continent.id} to={`/details/${continent.name}`}>
            <div className="arrow"><BsFillArrowRightCircleFill /></div>
            <img src={continent.image} alt="contImgae" />
            <li>
              {continent.name}
              {' '}
              <br />
              <span>
                {continent.counNum}
                {' '}
                countries
              </span>
            </li>
          </Link>
        ))}
      </div>
    </>

  );
};

export default Home;
