import React from "react";
import './Body.css'
import Top from './TopSec/Top';
import List from './ListSec/List';
import Activity from './ActivitySec/Activity';

const Body = () => {
    return(
        <div className='content'>
            <Top/>
        <div className='bottom'>
            <List/>
            <Activity/>
        </div>
        </div>
    )
}

export default Body