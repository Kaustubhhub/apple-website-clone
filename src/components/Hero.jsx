import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1.5,
      translateY:0
    })

    gsap.to('#cta',{
      opacity:1,
      delay:2,
      y:-50
    })
  }, [])

  return (
    <section className='bg-black relative w-full nav-height '>
      <div className='h-5/6 flex-center flex-col'>
        <p id='hero' className='hero-title'>
          Iphone 15 pro
        </p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline={true} key={videoSrc} className='pointer-events-none'>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
