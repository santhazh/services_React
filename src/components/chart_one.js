import React from 'react';
import axios from 'axios';

class Chartone extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/data.json`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons })
        console.log(persons);
      })
  }
  render() {
    return (
      /*<ul>
              { console.log(this.state.persons.firstName) }
            </ul> */

      <div className="c1">
        {(this.state.persons && this.state.persons.resourceSkills && this.state.persons.resourceSkills.length > 0) ?
          this.state.persons.resourceSkills[0].skillName
          : ''
        }
      </div>

    )
  };
};

export default Chartone;