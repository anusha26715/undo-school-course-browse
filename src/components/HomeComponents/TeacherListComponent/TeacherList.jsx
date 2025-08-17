import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './TeacherList.css'

const TeacherList = () => {

    const teachers =[
        {
            id: 1,
            name: "Madhavan",
            qualification: "M.Sc, B.Ed",
            experience: "15+",
            students: "1000+",
            field: "Computer Science"
        },
        {
            id: 2,
            name: "Priya Sharma",
            qualification: "Ph.D, M.Sc",
            experience: "12+",
            students: "850+",
            field: "Mathematics"
        },
        {
            id: 3,
            name: "Ramesh Iyer",
            qualification: "M.A, M.Phil",
            experience: "10+",
            students: "650+",
            field: "English Literature"
        },
        {
            id: 4,
            name: "Anita Verma",
            qualification: "M.Com, B.Ed",
            experience: "18+",
            students: "1200+",
            field: "Commerce"
        },
        {
            id: 5,
            name: "Suresh Kumar",
            qualification: "M.Tech, Ph.D",
            experience: "20+",
            students: "2000+",
            field: "Mechanical Engineering"
        },
        {
            id: 6,
            name: "Meena Nair",
            qualification: "M.Sc, NET",
            experience: "8+",
            students: "500+",
            field: "Biology"
        },
        {
            id: 7,
            name: "Arvind Gupta",
            qualification: "MBA, M.Com",
            experience: "14+",
            students: "900+",
            field: "Management Studies"
        },
        {
            id: 8,
            name: "Lakshmi Rao",
            qualification: "M.A, Ph.D",
            experience: "16+",
            students: "1100+",
            field: "History"
        }
    ]

  return (
    <Swiper className='mb-5' modules={[Navigation, Pagination]}
            spaceBetween={10}
            breakpoints={{
              0: {          // small screens (mobile)
                slidesPerView: 1,
              },
              440: {        // sm (>=640px)
                slidesPerView: 2,
              },
              640: {        // sm (>=640px)
                slidesPerView: 3,
              },
              768: {        // md (>=768px)
                slidesPerView: 4,
              },
              1024: {       // lg (>=1024px)
                slidesPerView: 5,
              },
              1280: {       // xl (>=1280px)
                slidesPerView: 6,
              },
            }}
            navigation={true}   // <-- enables arrows
            pagination={{ clickable: true }} // optional dots
            loop={true} >
            {
              teachers.map((teacher) => {
                return (
                <SwiperSlide className='teacher-container mb-5 ps-2 pe-2' key={teacher.id}>
                    <div className="teacher-wrapper">
                        <img src="src/assets/images/teacher-img.png" alt={teacher.name} className='teacher-img' />         
                        <div className="teacher-card">      
                            <h4>{teacher.name}</h4>
                            <p className='m-0'>{teacher.qualification} | {teacher.experience}Years</p>
                            <p className='m-0'>{teacher.students} Students</p>
                            <span>{teacher.field}</span>
                        </div>
                    </div>
            </SwiperSlide>
              )})
            }
            
          </Swiper>
  )
}

export default TeacherList
