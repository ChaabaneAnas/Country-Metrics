import { Route, Routes } from 'react-router';
import Header from './Components/header';
import Home from './Components/homePage';
import Details from './Components/details';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </>
);
export default App;
