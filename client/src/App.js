import './App.css';
import { Link, Router } from '@reach/router';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import AddPet from './views/AddPet';
import Main from './views/Main';
import UpdatePet from './views/UpdatePet';
import OnePet from './views/OnePet';


function App() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
        <h1>Pet Shelter</h1>
          <div className="col-sm-3 d-flex justify-content-between">
            {/* <Link to="players/list"><h5>Manage Players</h5></Link>
            <span> | </span>
            <Link to="status/game/1"><h5>Manage Player Status</h5></Link> */}

          </div>
        </div>

        <Router>
          <Main path="/"></Main>
          <AddPet path="/pets/new"></AddPet>
          <OnePet path="/pets/:id"></OnePet>
          <UpdatePet path="/pets/:id/edit"></UpdatePet>
        </Router>
    </div>
  );
}

export default App;
