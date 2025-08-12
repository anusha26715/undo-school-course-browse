import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

  const reviewsList = [
    { icon: "bi bi-people", count: "10K+", text: "Happy Kids" },
    { icon: "bi bi-star", count: "4.9", text: "Ratings" },
    { icon: "bi bi-trophy", count: "500+", text: "Courses" },
    { icon: "bi bi-clock", count: "24/7", text: "Support" },
  ]

  return (
    <main className='login-container'>
      {/* Decorative background circles */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      <div className="bg-circle bg-circle-3"></div>
      <section className="container login-wrapper">
        <div className="row">
          <div className="col-lg-6 login-context">
            <span>✨New courses every week!</span>
            <h2 className='pt-4 pb-4'>Learn, Play <br /><span>Grow! 🌟</span></h2>
            <p>Discover amazing courses designed just for kids! From coding adventures to science experiments, we make learning super fun!🚀</p>
            <div className="btn-container">
              
                <Link to="/home">
                  <button className="login-start" type='button'>
                    Start Learning today🎯<i class="bi bi-arrow-right"></i>
                  </button>
                </Link>
              <Link>
                <button className="login-demo">
                  <i class="bi bi-play"></i> Watch Demo</button>
              </Link>
            </div>
            <div className="reviews-container">
              {reviewsList.map((review, index) => (
                <div className="each-review" key={index}>
                  <i className={review.icon}></i>
                  <span>{review.count}</span>
                  <p className='mb-0'>{review.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 grid-photo-container">
            <div className="grid-photo-wrapper">
              <div className="login-img-1">
                <img src="/src/assets/images/learning-img-1.jpg" alt="kids learn" />
              </div>
              <div className="login-img-2 d-flex">
                <img src="/src/assets/images/learning-img-2.jpg" alt="kids learn" />
              </div>
              
              <div className="login-img-3">
                <img src="/src/assets/images/learning-img-3.jpg" alt="kids learn" />
              </div>
              
              <div className="login-img-4">
                <img src="/src/assets/images/learning-img-4.jpg" alt="kids learn" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
