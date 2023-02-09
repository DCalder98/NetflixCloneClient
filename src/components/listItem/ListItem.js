import { Add, AddBox, PlayArrow, ThumbDown, ThumbUp } from '@material-ui/icons'
import { useState } from 'react'
import './ListItem.scss'

export default function ListItem({ index }) {

    const [isHovered, setIsHovered] = useState(false);
    const trailer = 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761'
    return (
        <div className='listItem'
            style={{ left: isHovered && index * 227.5 - 50 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src='https://m.media-amazon.com/images/M/MV5BMjE4NTcwMjU3MF5BMl5BanBnXkFtZTgwODE1MTAwMjE@._V1_.jpg' alt='' />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className='itemInfo'>
                        <div className='icons'>
                            <PlayArrow className='icon' />
                            <Add className='icon'/>
                            <ThumbUp className='icon'/>
                            <ThumbDown className='icon'/>
                        </div>
                        <div className='itemInfoTop'>
                            <span>2h 6m</span>
                            <span className='released'>Released: 1997</span>
                            <span className='rating'>14A</span>
                        </div>
                        <div className='desc'>
                            Lorem ipsum test info. Will hunting is smart
                        </div>
                        <div className='genre'>Drama/Romance</div>
                    </div>
                </>
            )}
        </div>
    )
}
