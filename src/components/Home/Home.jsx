import Banner from '../../components/HomeComponents/Banner/Banner';
import AgeComponent from '../../components/HomeComponents/AgeComponent/AgeComponent';
import CourseListComponent from '../HomeComponents/CourseListComponent/CourseListComponent';
import TeacherList from '../HomeComponents/TeacherListComponent/TeacherList';
import CategoryList from '../HomeComponents/CategoryListComponent/CategoryList';
import './Home.css'
import TimingList from '../HomeComponents/TimingList/TimingList';


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

      <section className="launches-container" id="launchesContainer">
        <img src="/images/clock-frame.png" className='clock-frame-1' alt="clock" />
        <h2 className='webinar-heading'>Webinar Starting Within 24 hrs</h2>
        <CourseListComponent/>
        <img src="/images/clock-frame.png" className='clock-frame-2' alt="clock" />
      </section>

      <section className="courses-container">
        <h2 className='text-center'>Popular Categories</h2>
        <p className='text-center'>Pick what you love most! These categories have everything you need to learn something awesome⭐</p>
        <div className='category-list-main'>
          <CategoryList/>
        </div>
        <CourseListComponent/>
      </section>

      <section className="courses-container" style={{backgroundColor: "var(--color-tint-blue)"}}>
        <h2 className='text-center'>Filter With Time</h2>
        <p className='text-center mb-5'>Choose the perfect time that fits your child's schedule</p>
        <TimingList/>
        <CourseListComponent layout="horizontal"/>
      </section>

    </main>
  )
}

export default Home
