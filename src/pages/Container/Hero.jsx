import React from 'react'
import  images  from '../../constants/images.js'

const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
        <div>
            <h1>Read The Most Interesting Articles</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, incidunt perferendis at enim recusandae autem.</p>
        </div>
        <div>
            <div>
                <input type="text" />
            </div>
            <button>Search</button>
        </div>
        <div>
            <span>Popular Tags:</span>
            <ul>
                <li>Design</li>
                <li>User Experience</li>
                <li>User Interfaces</li>
            </ul>
        </div>
        <div className='hidden'>
            <img src={images.HeroImage} alt="" />
        </div>
    </section>
  )
}

export default Hero