
import PropTypes from 'prop-types'

function Navbar ({icon, title }) {


    return (
      <div className="navbar bg-primary">
        <h1>
          <i className={icon}></i>
          {title}
        </h1>
      </div>
    )
}

Navbar.defaultProps = {
  title: "GitHub Profiler",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar;