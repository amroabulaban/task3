import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const Navbar = () => {
    return (
      <box>
      <div style={styles} >
        <nav className="navbar navbar-expand-lg bg-white">

  <a class="navbar-brand" href="https://almahealth.io/">
      <div class="logo-image">
            <img width="150" height="50" src="https://almahealth.io/wp-content/uploads/2021/09/Alma-Health-Logo-01.png" alt = "" class="img-fluid"/>
      </div>
   </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item active">
        <a 	className="nav-link" href="https://almahealth.io/">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="https://almahealth.io/about-us/">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://almahealth.io/mission/">Mission</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://almahealth.io/vision/">Vision</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://almahealth.io/meet-the-team/">Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://almahealth.io/contact-us/">Contact us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://almahealth.io/investors/">Investors</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</box>
    )
}

export default Navbar