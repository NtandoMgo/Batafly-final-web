import './Hero.css'
import arrow_btn from '../../../../../assets/background_home/arrow_btn.png'
import play_icon from '../../../../../assets/background_home/play_icon.png'
import pause_icon from '../../../../../assets/background_home/pause_icon.png'

export const Hero = ({setPlayStatus,heroData,heroCount,setHeroCout,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="listen-explore">
        <p>Listen</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=> setHeroCout(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=> setHeroCout(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=> setHeroCout(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}
