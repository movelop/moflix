import React from 'react';
import './home.scss';

import { Navbar, Featured, List } from '../../components'

const home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Featured type = 'series' />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default home
