import './Background.css'
import video from '../../../../../assets/background_home/video.mp4'
import photo from '../../../../../assets/background_home/photo.jpg'
import photo1 from '../../../../../assets/background_home/photo1.jpg'
import photo2 from '../../../../../assets/background_home/photo2.jpg'

export const Background = ({playStatus,heroCount}) => {
  if (playStatus) {
    return (
        <video className='background' autoPlay loop muted>
            <source src={video} type='video/mp4'/>
        </video>
    )
  }else if(heroCount === 0) {
    return <img src={photo} className='background' alt="" />
  }else if(heroCount === 1) {
    return <img src={photo1} className='background' alt="" />
  }else if(heroCount === 2) {
    return <img src={photo2} className='background' alt="" />
  }
}
