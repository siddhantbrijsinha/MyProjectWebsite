import React, { Component } from "react";
import PageWrapper from "./Component/PageWrapper";
import Home from "./Component/Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    axios.get('http://127.0.0.1:8000/api/?format=json').then(resp => {
      console.log('Response', resp)
    }).catch(err => {
      console.log('Error', err)
    });
  }

  componentDidMount() {
    this.callAPI();
  }
  render() {
    return (
      <Router>
        <PageWrapper>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/contact" component={Contact} />
        </PageWrapper>
      </Router>
    );
  }
}
export default App;
