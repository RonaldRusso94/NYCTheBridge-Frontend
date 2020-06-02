import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Browse from './components/pages/Browse';
import Admin from './components/pages/Admin';

import NotFound from './components/pages/NotFound';

import Artist from './components/artists/Artist';

import Album from './components/albums/Album';
import Single from './components/singles/Single';
import Genre from './components/genres/Genre';

import ArtistsState from './context/artists/ArtistsState';
import AlbumsState from './context/albums/AlbumsState';
import SinglesState from './context/singles/SinglesState';

import Layout from './components/layout/Layout';

import { createBrowserHistory } from 'history';

import ReactGA from 'react-ga';

import './App.css';

// ReactGA.initialize('UA-137181245-1');
// const browserHistory = createBrowserHistory();
// browserHistory.listen((location, action) => {
//   ReactGA.pageview(location.pathname + location.search);
// });

const history = createBrowserHistory();
ReactGA.initialize('UA-137181245-1');
history.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
  console.log(location.pathname);
});

const App = () => {
  return (
    <ArtistsState>
      <AlbumsState>
        <SinglesState>
          <Router history={history}>
            <div className='App'>
              <Layout>
                <div className='container'>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/browse' component={Browse} />
                    <Route exact path='/browse/:category' component={Browse} />
                    <Route
                      exact
                      path='/browse/genres/:genreId'
                      component={Genre}
                    />
                    <Route exact path='/artist/:id' component={Artist} />
                    <Route exact path='/album/:id' component={Album} />
                    <Route exact path='/single/:id' component={Single} />
                    <Route exact path='/admin' component={Admin} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </Layout>
            </div>
          </Router>
        </SinglesState>
      </AlbumsState>
    </ArtistsState>
  );
};

export default App;
