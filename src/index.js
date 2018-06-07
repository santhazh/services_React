import React from 'react';
import ReactDOM from 'react-dom';

import { Profile , Details } from './components/details_tab';

import Skills  from './components/skills';
import Chartone  from './components/chart_one';
import Charttwo  from './components/chart_one';
import Chartthree  from './components/chart_one';
import Chartfour  from './components/chart_one';
import Chartfive  from './components/chart_one';








const App = () => {
    
    return (
        <div >
        <Profile />
    <Details />
    <Skills />
        <div className="container-fluid">

    <div className="col-sm-3"><Chartone /></div>
  
        </div>
    </div>
           );
    
}

ReactDOM.render(<App/>, document.querySelector('.container'));