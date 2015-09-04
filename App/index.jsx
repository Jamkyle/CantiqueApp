import React from 'react';
import PropTypes from 'react';
import Router from 'react-router';
import {Link, Route} from 'react-router';
import Ratchet from 'react-ratchet';
import './css/ratchet-theme-android.min.css';
import './css/ratchet.min.css';
import './css/app.css';
var RouteHandler = Router.RouteHandler;

class App extends React.Component{
  render(){
    return <RouteHandler />
  }
}

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.service = {cantiqueService};
    this.state = {cantiques : [], sel : 1, cantique: {}};
    this.handler = this.handler.bind(this);
   }
   handler(key) {
     if(this.state.sel===0){
        this.service.cantiqueService.findByContent(key).done(function(result) {
          this.setState({ searchKey: key, cantiques: result});
        }.bind(this));
    }
    if(this.state.sel===1){
      this.service.cantiqueService.findByNum(key).done(function(result) {
        this.setState({searchKey: key, cantiques: result});
      }.bind(this));
    }
  }
  render(){
  return  (
    <div >
      <Header title='Home Page'/>
      <div className="content">
        <SearchBar handler={this.handler}/>
        <ListResult cantiques={this.state.cantiques} />
      </div>
    </div>);
  }
}

class Header extends React.Component{
  render(){
    return(
  <Ratchet.NavBar>
    <Ratchet.Title>
      {this.props.title}
    </Ratchet.Title>
    <Ratchet.NavButton pull-left href="/" className='btn-link'>Back</Ratchet.NavButton>
  </Ratchet.NavBar>
  );
  }

}
class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = {searchKey: ""};
    this.handler = this.handler.bind(this);
  }

  handler(event){
    var searchKey = event.target.value;
    this.setState({searchKey : searchKey});
    this.props.handler(searchKey);
  }

  render(){
    return (
        <input type='search' value={this.state.symbol} placeholder='Search' onChange={this.handler} />
    );
  }
}

class ListCantique extends React.Component{
  render(){
    return (<li>
              <Link to={"/cantique/"+this.props.cantique.id}>
                {this.props.cantique.id} {this.props.cantique.title}
              </Link>
            </li>
          );
  }
}
class ListResult extends React.Component {
  render(){
    var items = this.props.cantiques.map(function(cantique){
      return (<ListCantique key={cantique.id} cantique={cantique} />);
    });
    return (
      <ul>
        {items}
      </ul>
    );
  }
}

//Cantique Page

class Cantique extends React.Component{
    constructor() {
      super();
      this.service = {cantiqueService};
        this.state = {cantique: {}};
    }
    componentDidMount(){
        this.service.cantiqueService.findById(this.props.params.cantiqueId).done(function(result) {
          this.setState({cantique: result});
        }.bind(this));
    }
    render() {
        return (
          <div >
            <Header title='Cantique'/>
            <div className="content align_center">
              <h2 className='content-padded'>{this.state.cantique.id}.- {this.state.cantique.title}</h2>
              <div className='container'>
                <div className='content-split _left align_right'><p className='content-padded'>{this.state.cantique.content }</p></div>
                <div className='content-split _right align_left'><p className='content-padded'>{this.state.cantique.trad}</p></div>
              </div>

            </div>
          </div>
          );
    }
}

var routes =(
  <Route name="app" path="/" handler={App}>
    <Route name='home' path='/' handler={HomePage}/>
    <Route name='cantique' path="cantique" handler={Cantique}>
      <Route path="/cantique/:cantiqueId" handler={Cantique}/>
    </Route>
  </Route>

);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});

//React.render(<HomePage service={cantiqueService}/>, document.body);
