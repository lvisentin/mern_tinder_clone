import { IconButton } from '@material-ui/core';
import React from 'react'
import './SwipeButtons.css';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';

function SwipeButtons() {
    return (
        <div>
            <div className="swipeButtons_container">
                <IconButton className="swipe_button swipe_button_close">
                    <CloseIcon fontSize="large" />
                </IconButton>

                <IconButton className="swipe_button swipe_button_superlike">
                    <StarIcon fontSize="large" />
                </IconButton>
                
                <IconButton className="swipe_button swipe_button_like">
                    <FavoriteIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default SwipeButtons
