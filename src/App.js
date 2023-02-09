import logo from './logo.svg';
import './App.css';
import Main3 from './assets/main3.png'
import Home from "./assets/Icons/Home.png"
import About from "./assets/Icons/About.png"
import Team from "./assets/Icons/Team.png"
import Resources from  "./assets/Icons/Resources.png"


function App() {
  return (
    <div className="App">
      
       
        <div className="homepage">
          <nav className="navigation-bar">
            <h1 className="logo" src="logo.png">Trove12</h1>
            <div className="other" id="other">
              <a className="active" href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Team </a>
              <a href="#">Resources</a>
            </div>
          </nav>

          <section className="section-1">
            <h1 className="hero-title">
              Trove12<br />
              <span className="quote"> <q>Let us Study Together</q> </span>
            </h1>
            <img src={Main3} alt="" />
          </section>
        </div>
        <section className="homepage-2">
          <h1 className="title-2">What is Trove12 ?</h1>
          <p className="para-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quisquam facilis harum unde debitis recusandae, at provident corporis ullam laudantium ea voluptatum quidem non fugiat, nostrum animi nesciunt ut repellat blanditiis. Odio commodi blanditiis placeat voluptates praesentium! Iusto, provident non!
          </p>
        </section>
       
        <footer>
          <div className="Title">
            <h2>Trove12</h2>
          </div>
          <div className="icon">
            <div>
              <a href="#">
                <img src={Home} alt="HOME Icon" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={About} alt="About Icon" /></a>
            </div>
            <div>
              <a href="#">
                <img src={Team} alt="Lab Icon" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={Resources} alt="Resource Icon" />
              </a>
            </div>
  
          </div>
          <ul className="menu_type">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a className="lil-right" href="#">Team</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
          <p>© 2023 Trove12 | All Rights Reserved</p>
        </footer>
      
    </div>
  );
}

export default App;
