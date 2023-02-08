

const images = [
    {
        title: "Ya Heard",
        filename: 'YaHeard.png',
        link: "https://fathomless-woodland-16696.herokuapp.com/",
        github: "https://github.com/Simplerer/ya-heard"
    },
    {
        title: "A Tech-E-ish Blog",
        filename: 'Tech-E-ish.png',
        link: "https://limitless-forest-03421.herokuapp.com/",
        github: "https://github.com/Simplerer/tech-blog-mvc"
    },
    {
        title: "The Weather Board",
        filename: 'weather-board.png',
        link: "https://simplerer.github.io/weather-board/",
        github: "https://github.com/Simplerer/weather-board"
    },
    {
        title: "Employee Tracker Manager",
        filename: 'EmployerTrack.png',
        link: "",
        github: "https://github.com/Simplerer/employee-tracker-manager"
    },
    {
        title: "Code Quiz Kid",
        filename: 'Quiz-Kid.png',
        link: "https://simplerer.github.io/code-quiz-kid/",
        github: "https://github.com/Simplerer/code-quiz-kid"
    },
    {
        title: "Generate A Team",
        filename: 'Team-Roster.png',
        link: "",
        github: "https://github.com/Simplerer/generate-a-team"
    }
]

export default images;


<div className="pt-3">
<div className="card">
  <div className="card-body">
    <div className="col">
      <h1>Scott Stone</h1>
    </div>
  </div>
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs justify-content-end">
      <li className="nav-item">
        <a className={currentPage == 'About' ? 'nav-link-active' : 'nav-link'}
          href="#about"
          onClick={() => pageChanger('About')}>About</a>
      </li>
      <li className="nav-item">
        <a className={currentPage == 'Portfolio' ? 'nav-link-active' : 'nav-link'}
          href='#portfolio'
          onClick={() => pageChanger('Portfolio')}>Portfolio</a>
      </li>
      <li className="nav-item">
        <a className={currentPage == 'Contact' ? 'nav-link-active' : 'nav-link'}
          href="#contact"
          onClick={() => pageChanger('Contact')}>Contact</a>
      </li>
      <li className="nav-item">
        <a className={currentPage == 'Resume' ? 'nav-link-active' : 'nav-link'}
          href="#resume"
          onClick={() => pageChanger('Resume')}>Resume</a>
      </li>
    </ul>
  </div>
</div>
</div>