import Reactat, { Component } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{this.props.type}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item fs-1">
                <IoIosNotificationsOutline />
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <div className="d-flex">
                    <img src=""/>
                    <div className="d-flex">
                        <span className="fs-5">Ndiaga SALL</span>
                        <span>Administrateur</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
