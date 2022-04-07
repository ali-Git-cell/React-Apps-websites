
import PropTypes from 'prop-types'


function UserItem ({user: {login, avatar_url, html_url}}) {
    return (
      <div className="card text-center">
        <img style={{ width: "65px"}} className="round-img" src={avatar_url} alt=""/>
        <h3>{login}</h3>
        <div>
          <a href={html_url} class="btn btn-dark btn-sm my-1">More info</a>
        </div>
      </div>
    )
}


UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
export default UserItem