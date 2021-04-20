import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Style.css';
import * as BS from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManagementIp from './pages/ManagementIp';
import Snmp from './pages/Snmp';
import Clientlist from './pages/ClientList';
import Link from './pages/Link';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header'

function App() {
  return (
    <Router>
      <Header />
      <BS.Container fluid>
        <BS.Row>
          <Navbar />
          <BS.Col xs={10}>
            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/managementip' component={ManagementIp} />
              <Route path='/snmp' component={Snmp} />
              <Route path='/link' component={Link} />
              <Route path='/clientlist' component={Clientlist} />
            </Switch>
          </BS.Col>
        </BS.Row>

      </BS.Container>


    </Router>
  );
}

export default App;
