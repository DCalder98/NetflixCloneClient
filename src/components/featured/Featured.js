import { Info, PlayArrow } from '@material-ui/icons'
import React from 'react'
import './Featured.scss'

function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === "movies" ? "Movies" : "Series"}</span>
                <select name='genre' id='genre'>
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="documentary">Documentary</option>
                    
                </select>
                </div>

        )}
        <img src='https://images3.alphacoders.com/216/216485.jpg'/>
        <div className='info'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Kill_Bill_%28logo%29.png'/>
            <span className='desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <div className='buttons'>
                <button className='play'>
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className='more'>
                    <Info/>
                    <span>Info</span>
                </button>
            </div>
        </div>
        </div>
  )
}

export default Featured