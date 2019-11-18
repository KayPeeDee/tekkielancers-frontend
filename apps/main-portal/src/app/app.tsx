import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";


import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import './app.scss';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

interface IApp{
  list: any[],
  searchTerm: string
}
class App extends Component<{}, IApp>{

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      list: [],
      searchTerm: '',
    }
    console.log(this.state);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount(){
    this.loadData();
    
  }

  loadData(){
      setTimeout(()=>{
          this.setState({list})
      }, 500)
  }

  onDismiss(id){
    console.log("Item dismissed")
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  }

  onSearchChange(event){
    console.log(event.target.value);
    this.setState({ searchTerm: event.target.value });
  }
  
  render() {
    return (

     
      // <div>
      //   <h1>Welcome to Tekkielancers the African leader in technology freelancing services!!!</h1>
      //   <form>
      //     <input type="text" onChange={this.onSearchChange}/>
      //   </form>
      //   {
      //     this.state.list.filter(isSearched(this.state.searchTerm)).map(item => {
      //       return (
      //         <div key={item.objectID}>
      //           <span>
      //             <a href={item.url}>{item.title}</a>
      //           </span>
      //           <span>{item.author}</span>
      //           <span>{item.num_comments}</span>
      //           <span>{item.points}</span> &nbsp;&nbsp;
      //           <span>
      //             <button
      //               onClick = { () => this.onDismiss(item.objectID)} 
      //               type="button"
      //             >
      //               Dismiss
      //             </button>
      //           </span>
      //         </div>
      //       );
      //     })
      //   }
      // </div>

      // <Container className="p-3">
      //   <Jumbotron>
      //     <h1 className="header">Welcome To React-Bootstrap Typescript Example</h1>
      //   </Jumbotron>
      //   <h2>Buttons</h2>
        
      // </Container>

      <div>
        <Navbar bg="light" expand="lg">
          <Container className="p-3">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link  as={Link} to="/dashboard">Dashboard</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>

      </div>

      

      // <Router>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/">Start</Link>
      //       </li>
      //       <li>
      //         <Link to="/home">Home</Link>
      //       </li>
           
      //     </ul>
      //     <Switch>
      //       <Route exact path="/" component={App} />
      //       <Route path="/users" component={Home} />
      //     </Switch>
      //   </div>
      // </Router>
    )
  }
}

export default App;
