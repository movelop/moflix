import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import video from '../../assets/share.mp4';
import './play.scss';

const Play = () => {
    return (
        <div className='play'>
            <div className="back">
                <ArrowBackOutlined />
                Home 
            </div>
            <video
                className="video"
                autoPlay = {true}
                progress
                controls
                src={video}
            />
        </div>
    )
}

export default Play
