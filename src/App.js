import logo from './logo.svg';
import './App.css';

import Overview from './pages/overview'
import Projects from './pages/projects'

//bootstrap
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

import './assets/styles/main.css'

function App() {
  return (
    <Container fluid="xxxl" style={{padding: 15, height: '100vh'}}>
      <Tab.Container defaultActiveKey="workouts">
        <Nav variant="tabs">
          <div style={{marginRight: 20, paddingLeft: 5}}>
            <h4 className="title">Cody Quantock</h4>
          </div>
          <Nav.Item>
            <Nav.Link eventKey="overview">Overview</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="projects">Projects</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="overview">
            <Container fluid className='p-3'>
              <Overview />
            </Container>
          </Tab.Pane>
          <Tab.Pane eventKey="projects">
            <Container fluid className='p-3'>
              <Projects />
            </Container>
          </Tab.Pane>
        </Tab.Content>
      
      
      </Tab.Container>
    </Container>
  );
}

export default App;
