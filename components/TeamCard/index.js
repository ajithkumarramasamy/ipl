import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, id, teamImageURL} = teamDetails

    return (
      <li className="team-item">
        <Link to={`/team-matches/${id}`} className="link-item">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </Link>
      </li>
    )
  }
}

export default TeamCard
