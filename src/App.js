import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/06/tesla-autopilot-getty.jpeg?w=1390&crop=1"
            alt="Tesla recalls"
          />
        </div>

        <div className="texts">
          <h2>Vehicles over FSD beta software safety concerns</h2>
          <p className="info">
            <a className="author">Kirsten Korosec</a>
            <time> February 16, 2023 11:40 PM GMT+5:30</time>
          </p>
          <p className="summary">
            Tesla has issued a recall of its Full Self-Driving software, an
            advanced driver assistance system that federal safety regulators say
            could allow a vehicle to act unsafe around intersections.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/06/tesla-autopilot-getty.jpeg?w=1390&crop=1"
            alt="Tesla recalls"
          />
        </div>

        <div className="texts">
          <h2>Vehicles over FSD beta software safety concerns</h2>
          <p className="info">
            <a className="author">Kirsten Korosec</a>
            <time> February 16, 2023 11:40 PM GMT+5:30</time>
          </p>
          <p className="summary">
            Tesla has issued a recall of its Full Self-Driving software, an
            advanced driver assistance system that federal safety regulators say
            could allow a vehicle to act unsafe around intersections.
          </p>
        </div>
      </div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/06/tesla-autopilot-getty.jpeg?w=1390&crop=1"
            alt="Tesla recalls"
          />
        </div>

        <div className="texts">
          <h2>Vehicles over FSD beta software safety concerns</h2>
          <p className="info">
            <a className="author">Kirsten Korosec</a>
            <time> February 16, 2023 11:40 PM GMT+5:30</time>
          </p>
          <p className="summary">
            Tesla has issued a recall of its Full Self-Driving software, an
            advanced driver assistance system that federal safety regulators say
            could allow a vehicle to act unsafe around intersections.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
