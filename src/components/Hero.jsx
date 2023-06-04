import React from 'react'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-[800px] mx-auto'>
        <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
            <div>
                <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-red-500'>Xing</span></h1>
                <p className={`${styles.heroSubText} text-white`}>I'm a college student, web developer, <br className="sm:block hidden" /> and learning about ML & AI</p>
            </div>

        </div>
        
    </section>
  )
}

export default Hero