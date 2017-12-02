import { React, Component } from './test';
import logo from './logo.svg';
import './App.css';

class App2 extends Component {
  render() {
    console.log('App 2 hello')
    return (
      <div className="App">
        <HeaderX />
        <AppIntro />
        <FooterX />
      </div>
    );
  }
}

class AppIntro extends Component {
  render() {
    return (
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    );
  }
}

class ImageHeaderX extends Component {
  render() {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
}

class ImageFooterX extends Component {
  render() {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
}

class AppTitleHeaderX extends Component {
  render() {
    return (
      <h1 className="App-title">Header in React</h1>
    );
  } 
}

class AppTitleFooterX extends Component {
  render() {
    return (
      <h1 className="App-title">Footer in React</h1>
    );
  }  
}

class HeaderX extends Component {
  render() {
    return (
      <header className="App-header">
        <ImageHeaderX />
        <AppTitleHeaderX />
      </header>
    );
  }
}

class FooterX extends Component {
  render() {
    return (
      <footer className="App-footer">
        <ImageFooterX />
        <AppTitleFooterX />
      </footer>
    );
  }
}

export default App2;
