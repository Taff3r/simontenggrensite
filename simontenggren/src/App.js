import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core/';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './App.css';
import theme from './theme.js';
import About from './about.js';
import CV from './cv.js';
import Repos from './repos.js';
import Home from './home.js';

function App() {
  return (
      <Router>
      <div className="barMargin">
            <AppBar style={theme} >
                <Toolbar >
                    <Link to="/" className="App-hitem">
                        <h1 className="App-hitem" align="left" margin="10px"> simontenggren </h1>
                    </Link>
                    <Link to="/about" className="App-hitem"> 
                        <Button variant="outlined"> 
                            <Typography variant="h6">
                                About me 
                            </Typography>   
                        </Button>
                    </Link>
                    <Link to="/cv" className="App-hitem"> 
                        <Button variant="outlined"> 
                            <Typography variant="h6">
                                CV 
                            </Typography>   
                        </Button>
                    </Link>
                    <Link to="/repos" className="App-hitem"> 
                        <Button variant="outlined"> 
                            <Typography variant="h6">
                                Repos 
                            </Typography>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        <div>
            <Switch>
                <Route exact path="/repos">
                    <Repos/>
                </Route>
                <Route exact path="/cv">
                    <CV/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
           </Switch>
        </div>
      </div>
      </Router>
  );
}

export default App;
