import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <img style={{ height: "60px", background: "white", borderRadius: "5px" }} src="https://i.ibb.co/mzdSvxh/Group-33141.png" className="navbar-brand ms-5" href="#" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active me-5  text-white" aria-current="page" to="/home"><b>Home</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active me-5  text-white" aria-current="page" to="/destination"><b>Destination</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active me-5  text-white" aria-current="page" to="/login"><b>Login</b></Link>
              </li>
              <li className="nav-item">
                <p className="nav-link active me-5" style={{ color: "#CE4EC7" }}><b>{user.name}</b></p>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;