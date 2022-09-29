import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark " style={{ backgroundColor: 'darkviolet', borderRadius: '55px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Notes Manager</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="https://remarkable-piroshki-bad8e9.netlify.app/" target="_blank" rel="noopener noreferrer">
                 Tic Tac Toe Game 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="https://celebrated-palmier-ae7574.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Text Utils
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="https://melodious-parfait-042b3d.netlify.app/" target="_blank" rel="noopener noreferrer">
                  Image Handler
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="https://pro-developer01.github.io/SpotifyClone/" target="_blank" rel="noopener noreferrer">
                 Spotify Clone
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}