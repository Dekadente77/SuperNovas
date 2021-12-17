import team from '../images/team.png';
import '../styles/Team.css';

function Team() {
  return (
    
    <div className="Team">
      <header className="Team-header">
      <hr style={{color: '#ffff02', width: 300}}/>
      <h1><br/><br/>Team</h1>
        <p className="Peque">In our team we have the fabulous art of <b style={{color: '#ffff02'}}>Pistilla</b>, and the collaborations of <b style={{color: '#f17123'}}>Dekadente, Vinacho, Nastravamos and Node</b>. <br/><br/></p>
        <img src={team} className="center" alt="Rats" style={{maxWidth: "700px"}}/>
      </header><br/><br/><br/>
    </div>
  );
}

export default Team;