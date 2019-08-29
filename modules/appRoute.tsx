

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class  RoutesComponent extends React.Component {
  render(){
    let route : Route = new Route();
    return <Router> <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/topics" component={TopicsComponent} />
          </div>
          </Router>
  }
}

class HomeComponent extends React.Component {
  render() {
    return <p>I am Home</p>
  }
}

class AboutComponent extends React.Component {
  render() {
    return <p>I am About</p>
  }
}
class TopicsComponent extends React.Component {
  render() {
    return <p>I am Topics</p>
  }
}

export default RoutesComponent;