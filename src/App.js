import { useState, useEffect, useRef } from 'react';

import logo from './logo.svg';
import './App.css';

import './assets/styles/main.css'

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


function App() {

  // State to track the active tab
  const [activeTab, setActiveTab] = useState('overview');

  // Handler for selecting a tab
  const handleTabSelect = (key) => {
    setActiveTab(key);
  };

  useEffect(() => {
    // Code to run on initial page load
    setActiveTab('overview');
  }, []);


  return (
    <Container fluid="xxxl" style={{height: '100vh', padding: 20}}>
      <Container fluid="xxxl" style={{padding: 25, height: '100%'}} className="inner-container">
      <Tab.Container defaultActiveKey="workouts" activeKey={activeTab} onSelect={handleTabSelect}>
        <Row className="justify-content-between"> {/* Use Row to create the two-column layout */}
            <Col xs={6}> {/* First column for the name */}
              <div style={{ paddingLeft: 5 }}>
                <h4 className="title">Cody Quantock</h4>
              </div>
            </Col>
            <Col xs={6}> {/* Second column for the tabs */}
              <Nav variant="tabs" className="justify-content-end"> {/* Align tabs to the right */}
                <Nav.Item>
                  <Nav.Link eventKey="overview" style={{ fontWeight: '600', letterSpacing: 2 }}>Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="projects" style={{ fontWeight: '600', letterSpacing: 2 }}>Projects</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
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
    </Container>
  );
}

export default App;
