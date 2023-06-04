import React from 'react'
import { styles } from '../styles'
import resume from '../assets/XingChen_Resume.pdf'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} items-start gap-5`}>
            <div>
                <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-red-500'>Xing</span></h1>
                <p className={`${styles.heroSubText} text-white`}>I'm a college student, web developer, <br className="sm:block hidden" /> and learning about ML & AI</p>
            </div>
            <a href={resume} download>
                <button className="my-8 bg-tertiary hover:bg-black-100 text-white font-bold py-2 px-4 rounded">
                    Download Resume
                </button>
            </a>
        </div>
        
        
    </section>
  )
}

export default Hero