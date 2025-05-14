import '../style/bootstrap.rtl.css'
import '../style/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"
            >پولادنگار <strong className="text-success">وب</strong></a
          >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="commands.html"
                  >مرکز فرمان</a
                >
              </li> 
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#ip_panel"
                  data-bs-toggle="offcanvas"
                  role="button"
                  aria-controls="ip_panel"
                  >تنظیمات شبکه</a
                >
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                  >بارگذاری فایل</a
                >
              </li>
              <li className="nav-item">
                <a
                  class="nav-link"
                  role="button"
                  >مدیریت کابران</a
                >
              </li>
            </ul>
            <div className="d-flex"> 
              <button className="btn btn-secondary my-2 my-sm-0">
                پروفايل&nbsp;
                <FontAwesomeIcon icon={faUser} size="1x" color='brwon' />
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
}
export default NavBar;