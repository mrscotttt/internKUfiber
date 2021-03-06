import { Navbar,Nav,Form,Button,FormControl,Card,Container,Row,Col,DropdownButton,Dropdown,Select,Option,Jumbotron,InputGroup} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Headbar from './headbar';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import Bottom from './bottom';

const Add = () => {
  const [name, setname] = useState('');
  const [status, setstatus] = useState('');
  const [station1, setstation1] = useState('');
  const [station2, setstation2] = useState('');
  const [fibertype, setfibertype] = useState('');
  const [distance, setdistance] = useState('');
  const [core, setcore] = useState('');
  const [use_core, setuse_core] = useState('');
  const [notuse_core, setnotuse_core] = useState('');
  const [date, setdate] = useState('');
  const [person, setperson] = useState('');
  const [repair, setrepair] = useState('');
  const [anyelse, setanyelse] = useState('');
  
  const [station, setStation] = useState([])

  useEffect(() => {
    fetch('/station')
      .then(res => res.json())
      .then(station => setStation(station))
      console.log(station)
  },[])
  
  const handleSubmit = () => {
    if(window.confirm('are  you sure?')){
   
    const blog = { name,status,station1,station2,fibertype,distance,
      core,use_core,notuse_core,date,person,repair,anyelse,
    }

    fetch('/products', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }
  }

  return (
    <div className="App-main">
    <Headbar></Headbar>
    <br></br>
    <Container>
          <Row>
          <Col></Col>
          <Col xs="12">
            <Card>
            <Card.Header as="h5">Add</Card.Header>
            <Card.Body>
            <form>
                {/*name*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>??????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="string" 
                  required 
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
                </InputGroup>

                {/*status+type+insertplace*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>??????????????????????????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                  type="string" 
                  required 
                  value={status}
                  onChange={(e) => setstatus(e.target.value)}
                  as="select"
                  >
                    <option>?????????????????????????????????</option>
                    <option>?????????????????????????????????</option>
                    <option>?????????????????????????????????????????????????????????????????????</option>
                    <option>?????????????????????????????????????????????</option>
                </Form.Control>
                <InputGroup.Prepend>
                <InputGroup.Text>????????????????????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                  type="string" 
                  required 
                  value={fibertype}
                  onChange={(e) => setfibertype(e.target.value)}
                  as="select"
                  >
                    <option>?????????????????????????????????</option>
                    <option>Single Mode</option>
                    <option>Multi Mode</option>
                    <option>?????????????????????</option>
                </Form.Control>
                <Button variant="success" type="submit" href="/addstation">
                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </Button>
                </InputGroup>

                {/*s1+s2*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>??????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                  type="string" 
                  required 
                  value={station1}
                  onChange={(e) => setstation1(e.target.value)}
                  as="select"
                  >
                    <option>?????????????????????????????????</option>
                    {station.map( el=> (
                    <option key={el.id}>
                      {el.name}
                    </option>
                    ))}
                </Form.Control>
                <InputGroup.Prepend>
                <InputGroup.Text>?????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control 
                  type="string" 
                  required 
                  value={station2}
                  onChange={(e) => setstation2(e.target.value)}
                  as="select"
                  placeholder="Password"
                  >
                    <option>?????????????????????????????????</option>
                    {station.map( el=> (
                    <option key={el.id}>
                      {el.name}
                    </option>
                    ))}
                </Form.Control>
                </InputGroup>
                
                {/*core+distance*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>????????????????????????????????????????????????(m)</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="number" 
                  required 
                  value={distance}
                  onChange={(e) => setdistance(e.target.value)}
                />
                <InputGroup.Prepend>
                <InputGroup.Text>??????????????? Core</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="number" 
                  required 
                  value={core}
                  onChange={(e) => setcore(e.target.value)}
                />
                <InputGroup.Prepend>
                <InputGroup.Text>???????????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="number" 
                  required 
                  value={use_core}
                  onChange={(e) => setuse_core(e.target.value)}
                />
                <InputGroup.Prepend>
                <InputGroup.Text>?????????????????????????????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="number" 
                  required 
                  value={notuse_core}
                  onChange={(e) => setnotuse_core(e.target.value)}
                />

                </InputGroup>

                {/*date+restname*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>?????????????????????????????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="string" 
                  required 
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                />
                <InputGroup.Prepend>
                <InputGroup.Text>????????????????????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  type="string" 
                  required 
                  value={person}
                  onChange={(e) => setperson(e.target.value)}
                />
                </InputGroup>

                {/*repair*/}
                {/*<InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>??????????????????????????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  as="textarea" 
                  aria-label="With textarea" 
                  type="string" 
                  required 
                  value={repair}
                  onChange={(e) => setrepair(e.target.value)}
                />
                </InputGroup>*/}
                {/*else*/}
                <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>?????????????????????????????????????????????</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  as="textarea" 
                  aria-label="With textarea" 
                  type="string" 
                  required 
                  value={anyelse}
                  onChange={(e) => setanyelse(e.target.value)}
                />
                </InputGroup>
                <Button type="submit" onClick={handleSubmit} href="/insert">?????????????????????????????????</Button>
            </form>
            
            <br></br>
          
            </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          </Row>


    </Container>
    <Bottom></Bottom>
    </div>
  );
}

export default Add;
