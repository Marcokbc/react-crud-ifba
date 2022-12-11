import './App.css';
import Create from './components/Create/index.js';
import Read from './components/Read/index.js';
import Update from './components/Update/index.js';
import img from './assets/gymsvg.svg';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Button, Header, Segment } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <Segment clearing>
      <Header as='h3' floated='left'>
        FICA GRANDÃO
      </Header>
          <Header as='h3' textAlign='right'>
          <Link to='/create'>
              <Button>Cadastrar</Button>
          </Link>
          <Link to='/'>
              <Button>Listar</Button>
          </Link>
          </Header>
          
        </Segment>
      <div className="main">
        <img src={img} />
        <h2 className="main-header">FICA GRANDÃO</h2>
        <div>
          <Routes>
              <Route exact path="/create" element={<Create />} />
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
              <Route exact path="/" element={<Read />} />
          </Routes>
        </div>
        <Routes>
            <Route exact path="/update" element={<Update />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
