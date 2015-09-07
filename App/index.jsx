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
    this.state = {cantiques : [], sel : 1};
    this.handler = this.handler.bind(this);
   }
   changeChoice(e){
      this.setState({sel: e});
   }
   handler(key) {
     if(this.state.sel==0){
        this.service.cantiqueService.findByContent(key).done(function(result) {
          this.setState({ searchKey: key, cantiques: result});
        }.bind(this));
    }
    if(this.state.sel==1){
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
        <SearchBar handler={this.handler} />
        <Choix value={this.state.sel} onChoice={this.changeChoice.bind(this)}/>
        <ListResult cantiques={this.state.cantiques} />
      </div>
    </div>);
  }
}

class Choix extends React.Component{
  constructor(props){
    super(props);
    this.onChoice = this.onChoice.bind(this);
  }
  onChoice(e){
    this.props.onChoice(e.target.value)
  }
  render(){
    return  <div className='pull-right'>
        <select onChange={this.onChoice}>
          <option value='1'>num</option>
          <option value='0'>content</option>
        </select>
      </div>

  }

}

class Header extends React.Component{
  render(){
    return(
      <Ratchet.NavBar>
        <Ratchet.Title>
          {this.props.title}
        </Ratchet.Title>
        <Link to={"/"}><Ratchet.NavButton pull-left className='btn-link'>Back</Ratchet.NavButton></Link>
      </Ratchet.NavBar>
    );
  }

}
class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {searchKey: ""}
    this.handler = this.handler.bind(this);
  }

  handler(event){
    var searchKey = event.target.value;
    this.setState({searchKey : searchKey});
    this.props.handler(searchKey);
  }

  render(){
    return (
        <input type='search' value={this.state.searchKey} placeholder='Cherche un cantique' onChange={this.handler} />
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
      return (<ListCantique key={cantique.id} cantique={cantique}/>);
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
      this.state = {cantique: {}, strophes : []};

    }
    componentDidMount(){
        this.service.cantiqueService.findById(this.props.params.cantiqueId).done(function(result) {
          this.setState({cantique: result, strophes: result.strophe});
        }.bind(this));
    }
    render() {

      var content = this.state.strophes.map(function(strophe,i){
          return <Strophe key={i} strophe={strophe}/>
        });

        return (
          <div >
            <Header title={this.state.cantique.id+". "+this.state.cantique.title}/>
            <div className="content align_center">
              <div className='container'>
                {content}
              </div>
            </div>
          </div>
          );
    }
}

class Strophe extends React.Component{
  render(){
    return(
      <div>
        <h2 className='content-padded clearfix'>{this.props.strophe.sid}</h2>
        <p className='content-padded content-split _left'>{this.props.strophe.content}</p>
        <p className='content-padded content-split _right'>{this.props.strophe.trad}</p>
      </div>
  );
  }
}

class Stropheimg extends React.Component{ // strophe par image
  render(){
    return(
      <div>
        <h2 className='content-padded clearfix'>{this.props.strophe.sid}</h2>
        <img src={''+this.props.strophe.content+''} width="400" height='300'/>
      </div>
  );
  }
}


var routes =(
  <Route name="app" path="" handler={App}>
    <Route name='home' path='/' handler={HomePage}/>
    <Route name='cantique' path="cantique" handler={Cantique}>
      <Route path="/cantique/:cantiqueId" handler={Cantique} />
    </Route>
  </Route>

);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});

//React.render(<HomePage service={cantiqueService}/>, document.body);
