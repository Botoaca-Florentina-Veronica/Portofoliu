import React from 'react';
import upt from '../assets/upt.jpg'
import cat from '../assets/cat.png'
import pupil from '../assets/pupil.png'
import student from '../assets/student.png'
import arrow from '../assets/down-arrow.png'

const EducationSection = ({ darkMode }) => {
  return (
    <section id="about" className={darkMode ? 'dark-mode' : ''}>
      <p className="text-p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="pic-container-upt">
          <img src={upt} alt="UPT picture" className="upt" />
          <img src={cat} alt="cat at a window" className="cat-sticker" />
        </div>

        <div className="about-details">
          <div className="about-containers">
            <div className="details-container">
              <img src={student} alt="Student logo" className="icon-university" />
              <h3>University</h3>
              <p> 2022 - 2026 <br /> Computer Science-Bachelors Degree<br />Polytechnic University of Timisoara</p>
            </div>
            <div className="details-container">
              <img src={pupil} alt="Pupil logo" className="icon-highschool" />
              <h3>Highschool</h3>
              <p> 2018 - 2022 <br /> Mathematics-informatics profile<br />'Traian' National College<br />Drobeta-Turnu Severin</p>
            </div>
          </div>
          <div className="text"> 
            <p>Who am I?

              A curious mind with a camera in one hand and a mouse in the other — I thrive where creativity meets logic. By day, I’m working to become a full-stack developer; by night, an artist painting worlds, tinkering with watch mechanisms, or bringing drawings to life through animation.
              Learning isn’t confined to lectures for me — I dive into web development with relentless curiosity, building projects, dissecting tutorials, and turning theory into practice. When I’m not debugging code, I’m breaking down physics concepts for high school students, sharing the same excitement that once hooked me on the subject.
              Every hobby — whether assembling watches, wielding a paintbrush, or animating frame by frame — fuels my obsession with precision and storytelling. I don’t just study technology; I play with it, break it, and rebuild it better. My goal? To craft solutions as inventive as they are functional, one line of code (or stroke of color) at a time.

            </p>
          </div>
        </div>
      </div>
      <img src={arrow} alt="Arrow icon" className="icon-arrow"
        onClick={() => document.getElementById('experience').scrollIntoView()} />
    </section>
  )
}

export default EducationSection