import { useSelector } from "react-redux"
import { useParams } from "react-router";
import continentsData from "../Data/Data";

const Details = () => {
  const { id } = useParams()
const data = useSelector(state => state.Details)
return(
  <>
    {continentsData.filter((continent) => (
      continent.name === id )).map((continent) => (
      <div className="intro" key={id}>
        <img src={continent.image} alt="contitnet"/>
        <div>
          <h4>{continent.name}</h4>
          <p>{continent.counNum} Countrie</p>
        </div>
      </div> 
      ))
    }
    <h3>Countries informations 2022</h3>
  <div className="card-container">
      {data.map((countrie) => (
        <div key={countrie.id} className="card-2">
            <h2>{countrie.name.common}</h2>
          <img src={countrie.flags[0]} alt="Flag" />
          <ul>
            <li>SubRegion:<span>{countrie.subregion}</span></li>
            <li>Capital:<span>{countrie.capital}</span></li>
            <li>Language:<span>{Object.values(countrie.languages)[0]}</span></li>
            <li>population:<span>{countrie.population}</span></li>  
          </ul>
        </div>
      ))}
    </div></>
)
}
export default Details