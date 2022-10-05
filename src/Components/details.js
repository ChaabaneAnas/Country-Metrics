import { useSelector } from "react-redux"


const Details = () => {
const data = useSelector(state => state.Details)
console.log(data);
return(
<span>
  
</span>
)

}
export default Details