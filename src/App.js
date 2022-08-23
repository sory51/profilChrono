

import React from 'react';
import Countdown from 'react-countdown';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      person: {
        fullName: 'Khary NDOYE',
        profession: 'Assistante Sociale',
        bio: 'L’assistante sociale vous accompagne et vous oriente dans les démarches à faire pour faire valoir vos droits. Elle vous informe des droits et aides auxquels vous pouvez prétendre. Le système d’aides est complexe et dépend de plusieurs paramètres : votre état de santé, votre statut social, vos revenus et bien d’autres.Vous pouvez rencontrer des assistantes sociales dans les hôpitaux mais aussi au sein des mairies, de votre centre de sécurité social et des conseils généraux.Notre conseil : il peut être judicieux de consulter des assistantes sociales de différents organismes (sécu, mairie, mutuelles, etc.). En effet certaines aides sont susceptibles d’être organisées au niveau local, régional ou par votre mutuelle.',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj8otSbUHjhir_RoPrLESPJGCl0eEkHZcEL5GDzlk&s',
        
      },
      toggle: false,
     
      
    }

       // Random component
const Completionist=()=> {<span>You are good to go!</span>;}

// Renderer callback with condition
 const renderer = (minutes, seconds, completed )=>{
  if (completed) {
    // Render a completed state
    return Completionist ;
  } else {
    // Render a countdown
    return <span>{minutes}:{seconds}</span>;
  }
};
    
  }


  //start chrono when component is mounted
  componentDidMount() {
    
    this.timerID = setInterval(
      () => this.tick(),
      156000
    );
  }

  //stop chrono when component is unmounted
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  
  render() {
    return (
      <>
        {
          this.state.toggle ? (
            <>
              <div className="App">
                <div className='cont1'>
                <img src={this.state.person.imgSrc} alt="avatar" />
                <h1>{this.state.person.fullName}</h1>
                <Countdown date={Date.now()+10000} renderer={this.renderer} />
               
                </div>
                <div className='cont2'>
                <h2>{this.state.person.profession}</h2>
                <p>{this.state.person.bio}</p>

                </div>
               
              </div>
              <button  onClick={() => this.setState({ toggle: false })}>Hide</button>
              
            </>
          ) : (
              <button  onClick={() => this.setState({ toggle: true })}>toggle</button>
          )
        }

      </>
    );
  }
}

export default App;

