import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Browse from './components/pages/Browse';
import Admin from './components/pages/Admin';

import NotFound from './components/pages/NotFound';

import Artist from './components/artists/Artist';
import ArtistOverview from './components/artists/ArtistOverview';

import Album from './components/albums/Album';
import Single from './components/singles/Single';
import Genre from './components/genres/Genre';

import ArtistsState from './context/artists/ArtistsState';
import AlbumsState from './context/albums/AlbumsState';
import SinglesState from './context/singles/SinglesState';

import './App.css';

const App = () => {
  return (
    <ArtistsState>
      <AlbumsState>
        <SinglesState>
          <Router>
            <div className='App'>
              <Navbar />
              edgi
              <div className='container'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/browse' component={Browse} />
                  <Route exact path='/genre/:genre' component={Genre} />
                  <Route exact path='/artist/:id' component={Artist} />
                  <Route exact path='/album/:id' component={Album} />
                  <Route exact path='/single/:id' component={Single} />
                  <Route exact path='/admin' component={Admin} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </SinglesState>
      </AlbumsState>
    </ArtistsState>
  );
};

export default App;
