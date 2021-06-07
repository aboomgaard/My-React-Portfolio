import React from "react";

function Section() {
  return (
    <div id="work" class="container">
      <h2>Work</h2>

      <div class="work-cards row">
        <div class="col-12 col-md-4">
          <div
            class="card text-white bg-secondary mb-3"
            style={{"width": "20rem", "height": "20rem"}}
          >
            <img
              src="./Assets/photos/Screenshot.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">AdventurersLog</h5>
              <p class="card-text">
                My final project, I worked on both the front-end and back-end. 
                Connecting MongoDB, styling front-end and navbar.
	            </p>
              <a
                href=""
                target="_blank"
                class="btn btn-primary"
              >
                Github
              </a>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div
              class="card text-white bg-secondary mb-3"
              style={{"width": "20rem", "height": "20rem"}}
              >
              <img
                src="./Assets/photos/"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">StonkChasers</h5>
                <p class="card-text">
                  My first project we created a stocks app where users can buy stocks with BTC.
                </p>
                <a
                  href="https://github.com/aboomgaard/Stonk-Chasers"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Github
                </a>
              </div>
            </div>

            <div class="col-12 col-md-4">
              <div
                class="card text-white bg-secondary mb-3"
                style={{"width": "20rem", "height": "20rem"}}
                >
                <img
                  src="./Assets/photos/"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">README Generator</h5>
                  <p class="card-text">
                   This application generates a README.
                  </p>
                  <a
                    href="https://github.com/aboomgaard/Readme-Generator"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    Github
                  </a>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div
                  class="card text-white bg-secondary mb-3"
                  style={{"width": "20rem", "height": "20rem"}}
                  >
                  <img
                    src="./Assets/photos/mainpage1.PNG"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Coding Quiz</h5>
                    <p class="card-text">
                      I created a Coding Quiz based to text the users knowledge of Javascript.
                    </p>
                    <a
                      href="https://github.com/aboomgaard/Code-Quiz"
                      target="_blank"
                      class="btn btn-primary"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section