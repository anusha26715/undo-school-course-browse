import React from 'react'
import AnimatedHandStar from './Animation/HandAnimation/AnimatedHandStar';
import './Banner.css'
import HappyKidsIcon from './Animation/SmilyAnimation/SmilyAnimation';

const Banner = () => {
  return (
    <section className='banner-container'>
      <div className="container-fluid h-100 m-0 p-0">
        <div className="row m-0 p-0 banner-content">
            <div className="col-md-3 m-0 p-0 banner-first-img">
                <div className='banner-info banner-course'>
                  <h4 className='banner-number mb-0'>500+</h4>
                  <p className='mb-0 banner-text'>Courses</p>
                </div>
                <div className="banner-img-wrapper">
                    <img src="/images/banner-left-img.png" className='banner-img' alt="kidsPlay" />
                </div>
                <div className="banner-info banner-rating">
                  <AnimatedHandStar />
                  <div>
                    <h4 className='banner-number mb-0'>4.9</h4>
                    <p className='mb-0 banner-text'>Rating</p>
                  </div>
                </div>
            </div>

            <div className="col-md-6 banner-context">
                <h3 className='banner-heading'>Learn a New Skill <br /><span className='text-center'>Everyday, Anytime, and Anywhere.</span></h3>
                <form className='banner-input-form' type="submit">
                    <div className='input-group d-flex justify-content-between align-items-center'>
                        <i className="bi bi-search"></i>
                        <input className='form-control' type="search" placeholder='What do you want to learn today?' aria-label='Search'/>
                    </div>
                    <button className='home-btn ps-md-5 pe-md-5'>Search</button>
                </form>
            </div>

            <div className="col-md-3 m-0 p-0 banner-second-img">
                <div className="banner-info banner-count">
                  
                  {/* <HappyKidsIcon/> */}
                                    
                  <div>
                    <h4 className='banner-number mb-0'>10k+</h4>
                    <p className='mb-0 banner-text'>Happy Kids</p>
                  </div>
                </div>
                <div className="banner-img-wrapper">
                    <img src="/images/banner-right-img.png" className='banner-img' alt="kidsPlay" />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
