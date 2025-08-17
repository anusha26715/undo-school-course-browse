import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './CourseListComponent.css'

const CourseListComponent = ({layout = 'vertical'}) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const getAgeColor = (ageGroup) => {
    const [min, max] = ageGroup.split("-").map(Number);
    const age = Math.floor((min + max) / 2);

    if (age >= 1 && age <= 3) return 'var(--color-yellow-rgb)';
    if (age >= 4 && age <= 6) return 'var(--color-orange-yellow-rgb)';
    if (age >= 7 && age <= 11) return 'var(--color-pink-rgb)';
    if (age >= 12 && age <= 15) return 'var(--color-green-rgb)';
    if (age >= 16 && age <= 20) return 'var(--color-purple-rgb)'; 
    return 'transparent';
  };

    const courses = [
        {
            id: 1,
            title: "Summer Robotics Camp: fun projects with arduino.",
            description: "Build circuits and smart projects like alarms,weather stations etc.",
            image: "/images/courses-img.jpg",
            ageGroup: "16-18",
            duration: 45,
            price: 299,
            rating: 4.8,
            level:"intermediate",
            Language: "English",
            classes:4
        },
        {
            id: 2,
            title: "Creative Coding Bootcamp: Make games with Scratch.",
            description: "Learn the basics of programming by designing interactive games and animations.",
            image: "/images/courses-img.jpg",
            ageGroup: "3-4",
            duration: 30,
            price: 199,
            rating: 4.6,
            level: "beginner",
            Language: "English",
            classes: 3
        },
        {
            id: 3,
            title: "Junior Science Explorers: Fun hands-on experiments.",
            description: "Discover chemistry, physics, and biology with safe, exciting experiments.",
            image: "/images/courses-img.jpg",
            ageGroup: "15-16",
            duration: 50,
            price: 249,
            rating: 4.9,
            level: "beginner",
            Language: "English",
            classes: 5
        },
        {
            id: 4,
            title: "Young Inventors Workshop: Build your own gadgets.",
            description: "Use simple tools and materials to design and create your own inventions.",
            image: "/images/courses-img.jpg",
            ageGroup: "9-12",
            duration: 60,
            price: 349,
            rating: 4.7,
            level: "intermediate",
            Language: "English",
            classes: 6
        },
        {
            id: 5,
            title: "Beginner’s Chess Mastery: Strategy and fun challenges.",
            description: "Learn chess basics, strategies, and tactics to become a strong player.",
            image: "/images/courses-img.jpg",
            ageGroup: "12-14",
            duration: 40,
            price: 179,
            rating: 4.5,
            level: "beginner",
            Language: "English",
            classes: 4
        },
        {
          id: 6,
          title: "Art & Creativity Lab: Drawing, Painting and Crafts.",
          description: "Explore colors, shapes, and textures while learning creative art techniques.",
          image: "src/assets/images/courses-img.jpg",
          ageGroup: "4-6",
          duration: 35,
          price: 159,
          rating: 4.6,
          level: "beginner",
          Language: "English",
          classes: 3
      },
      {
          id: 7,
          title: "Math Puzzles & Brain Games Workshop.",
          description: "Sharpen logical thinking and problem-solving through fun puzzles and challenges.",
          image: "src/assets/images/courses-img.jpg",
          ageGroup: "7-12",
          duration: 50,
          price: 229,
          rating: 4.7,
          level: "intermediate",
          Language: "English",
          classes: 5
      },
      {
          id: 8,
          title: "Storytelling & Drama Club: Build Confidence on Stage.",
          description: "Develop public speaking and acting skills through engaging storytelling sessions.",
          image: "src/assets/images/courses-img.jpg",
          ageGroup: "16-19",
          duration: 45,
          price: 199,
          rating: 4.8,
          level: "beginner",
          Language: "English",
          classes: 4
      }


    ]


  return (
    <div className='course-list-container' id='courses'>
      <Swiper modules={[Navigation, Pagination]}
        spaceBetween={20}
        breakpoints={layout === 'horizontal' ? {
          0: {          // small screens (mobile)
            slidesPerView: 1,
          },
          640: {        // sm (>=640px)
            slidesPerView: 1,
          },
          768: {        // md (>=768px)
            slidesPerView: 1,
          },
          1024: {       // lg (>=1024px)
            slidesPerView: 2,
          },
          1280: {       // xl (>=1280px)
            slidesPerView: 2,
          },
        } : {
          0: {          // small screens (mobile)
            slidesPerView: 1,
          },
          640: {        // sm (>=640px)
            slidesPerView: 1,
          },
          768: {        // md (>=768px)
            slidesPerView: 2,
          },
          1024: {       // lg (>=1024px)
            slidesPerView: 3,
          },
          1280: {       // xl (>=1280px)
            slidesPerView: 4,
          },
        }}
        navigation={true}   // <-- enables arrows
        pagination={{ clickable: true }} // optional dots
        loop={true} >
        {
          courses.map((course) => {
            const cardColor = getAgeColor(course.ageGroup);
            const isHovered = hoveredId === course.id;
            const isActive = activeId === course.id;
            return (
            <SwiperSlide className='mb-5' key={course.id} id='courses'>
            <div className="course-wrapper">
              <div className='text-end rating-text'>⭐ {course.rating} | 200+ learners</div>
              <div className={`course-card ${layout === 'horizontal' ? 'course-card-horizontal' : ''}`}
              onMouseEnter={() => setHoveredId(course.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveId(course.id)}
                style={{
                  border: (isHovered || isActive) ? `2px solid rgb(${cardColor})` : '2px solid #ddd',
                  backgroundColor: isHovered ? `rgba(${cardColor}, 0.15)` : isActive ? `rgba(${cardColor}, 0.3)` : 'white',
                  boxShadow: (isHovered || isActive) ? `0 0 5px rgb(${cardColor})` : '0 0 5px #ddd',
                  transition: "all 0.3s ease-in-out"
                }} >
                {course.id === 1 && <div className='course-badge'>Selling Fast</div>}
                <img src={course.image} alt="courses" className='img-fluid course-img' />
                <div className="course-content">
                  <div className='course-details'>
                    <span className='course-language'>{course.Language}</span>
                    <span className='course-level'>{course.level}</span>
                    <span className='course-classes'>{course.classes} classes</span>
                  </div>
                  <h5>{course.title}</h5>
                  <p className='course-description'>{course.description}</p>
                  <div className='course-footer d-flex justify-content-between align-items-center'>
                    <pre className='course-data'>
                      <span>
                        <i className="bi bi-person"></i>
                        {course.ageGroup}yrs
                      </span> | 
                      <span>
                        <i className="bi bi-clock"></i> 
                          {course.duration}mins
                      </span> | 
                      <span>
                        <i className="bi bi-currency-rupee"></i>{course.price}
                      </span>
                    </pre>
                      <i className="bi bi-cart2 course-cart"></i>
                  </div>
                </div>
              </div>
              
            </div>
        </SwiperSlide>
          )})
        }
        
      </Swiper>
    </div>
  )
}

export default CourseListComponent
