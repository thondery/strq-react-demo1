import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  Link,
  hashHistory
} from 'react-router';
import NotFound from './pages/notfound';
import HomePage from './pages/home';
import Lession1 from './pages/lession1';

const {
  Component
} = React;

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      title: 'HomePage'
    };
    this.clickChange = this.clickChange.bind(this);
  }

  clickChange (evt) {
    let _this = this;
    let newState = {
      title: evt.target.text
    };
    _this.setState(newState);
  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div className="master">
          <ul>
              <li><Link to={`/`} onClick={this.clickChange}>HomePage</Link></li>
              <li>
                <Link to={`/lession1`}
                  activeClassName="active"
                  onClick={this.clickChange}
                >Lession1</Link>
              </li>
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    );
  }

}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="lession1" component={Lession1}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('wrap'));
