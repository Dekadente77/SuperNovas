import team from '../images/team.gif';
import '../styles/Team.css';

function Team() {
  return (
    
    <div className="Team">
      <header className="Team-header">
      <hr style={{color: '#ffff02', width: 300}}/>
      <h1><br/><br/>Team</h1>
        <p className="Peque">These items will be developed according to the community's interest and new proposals. We know we can <b style={{color: '#ffff02'}}>deliver results</b>. In our team we have great <b style={{color: '#ffff02'}}>artist and developers</b> and collaborators with experienced in the <b style={{color: '#f17123'}}>NFT world</b>. <br/><br/></p>
        <img src={team} className="center" alt="Rats" style={{maxWidth: "700px"}}/>
      </header><br/><br/><br/>
    </div>
  );
}

export default Team;