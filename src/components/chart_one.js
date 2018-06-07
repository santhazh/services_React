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
        render(){
        return (
    /*<ul>
            { console.log(this.state.persons.firstName) }
          </ul> */       

    <div className="c1">
            {JSON.stringify(this.state.persons)}
    {window.testData=this.state.persons}
    {(this.state.persons && this.state.persons.resourceSkills && this.state.persons.resourceSkills.length > 0) ? 
            { console.log(this.state.persons.resourceSkills) }
    : ''
    }
    </div> 

    )
        };
    };

    export default Chartone;