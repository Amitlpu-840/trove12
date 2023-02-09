import logo from './logo.svg';
import './App.css';
import Main3 from './assets/main3.png'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="homepage">
          <nav className="navigation-bar">
            <h1 className="logo" src="logo.png">Trove12</h1>
            <div className="other" id="other">
              <a className="active" href="index.html">Home</a>
              <a href="about.html">About</a>
              <a href="labs.html"> Team </a>
              {/* <a href="project.html"> Projects </a> */}
              <a href="resource.html">Resources</a>
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
       
        
      {/* </header> */}
    </div>
  );
}

export default App;
