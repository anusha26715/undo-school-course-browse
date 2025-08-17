import React from 'react'
import Banner from '../../components/HomeComponents/Banner/Banner';
import AgeComponent from '../../components/HomeComponents/AgeComponent/AgeComponent';
import CourseListComponent from '../HomeComponents/CourseListComponent/CourseListComponent';
import TeacherList from '../HomeComponents/TeacherListComponent/TeacherList';
import './Home.css'

const Home = () => {
  return (
    <main>
      <Banner/>
      <AgeComponent/>
      <section className="launches-container">
        <h2 className='launch-course-heading'>New Launches</h2>
        <p className='text-center mb-5'>Our Most Loved Courses that Kids absolutely adore!</p>
        <CourseListComponent/>
      </section>

      <section className="courses-container">
        <h2 className='launch-course-heading'>Featured Courses</h2>
        <p className='text-center mb-5'>Our Most Loved Courses that Kids absolutely adore!</p>
        <CourseListComponent/>
      </section>

      <section className="teacher-courses-container">
        <h2 className='text-center'>Learn From Top Teachers</h2>
        <p className='text-center mb-5'>Expert Instructors who make learning fun and engaging for every child</p>
        <TeacherList/>
        <CourseListComponent/>
      </section>

    </main>
  )
}

export default Home
