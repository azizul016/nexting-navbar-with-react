import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>
          Navbar
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>
                Home
              </Link>
            </li>

            <li className='nav-item dropdown'>
              <Link
                to='/'
                className='nav-link dropdown-toggle'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Product
              </Link>

              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <Link to='/' className='dropdown-item'>
                    Yarn
                  </Link>
                </li>
                {/* <li>
                  <Link to='/' className='dropdown-item'>
                    Fabric
                  </Link>
                </li> */}

                <li className='dropdown-submenu'>
                  <Link className='dropdown-item dropdown-toggle'>Fabric</Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link to='/knitFabric' className='dropdown-item'>
                        Knit Fabric
                      </Link>
                    </li>
                    <li>
                      <Link to='/wovenFabric' className='dropdown-item'>
                        Woven Fabric
                      </Link>
                    </li>

                    {/* <li className='dropdown-submenu'>
                      <Link to='/' className='dropdown-item dropdown-toggle'>
                        Submenu 2
                      </Link>
                      <ul className='dropdown-menu'>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 2.1
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 2.2
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 2.3
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='dropdown-submenu'>
                      <Link to='/' className='dropdown-item dropdown-toggle'>
                        Submenu 3
                      </Link>
                      <ul className='dropdown-menu'>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 3.1
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 3.2
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 3.3
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </li>
                <li className='dropdown-submenu'>
                  <Link className='dropdown-item dropdown-toggle'>
                    Garments
                  </Link>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link to='/knitGarment' className='dropdown-item'>
                        Knit Garments
                      </Link>
                    </li>
                    <li>
                      <Link to='/wovenGarment' className='dropdown-item'>
                        Woven Garments
                      </Link>
                    </li>

                    {/* <li className='dropdown-submenu'>
                      <Link to='/' className='dropdown-item dropdown-toggle'>
                        Submenu 2
                      </Link>
                      <ul className='dropdown-menu'>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 2.1
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 2.2
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 2.3
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className='dropdown-submenu'>
                      <Link to='/' className='dropdown-item dropdown-toggle'>
                        Submenu 3
                      </Link>
                      <ul className='dropdown-menu'>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 3.1
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 3.2
                          </Link>
                        </li>
                        <li>
                          <Link to='/' className='dropdown-item'>
                            Submenu 3.3
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </li>

                <li>
                  <Link to='/' className='dropdown-item'>
                    Accessories
                  </Link>
                </li>
              </ul>
            </li>

            <li className='nav-item dropdown'>
              <Link
                to='/'
                className='nav-link dropdown-toggle'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Product
              </Link>

              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li>
                  <Link to='/corporate-info' className='dropdown-item'>
                    Corporate Info
                  </Link>
                </li>

                <li>
                  <Link to='/team' className='dropdown-item'>
                    Team
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Client
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
