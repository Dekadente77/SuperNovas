import roadmap from '../images/roadmap.png';
import '../styles/Roadmap.css';

function Roadmap() {
  return (
    
    <div className="Roadmap">
      <header className="Roadmap-header">
      <hr style={{color: '#ffff02', width: 300}}/>
      <h1><br/><br/>Roadmap</h1>
        <p className="Peque">The <b style={{color: '#ffff02'}}>unique art style</b> and good vibes is the great strength of our project. The best way to create value is making more outstanding art, like <b style={{color: '#f17123'}}>airdrops, art contests, raffles, giveaways, lore, metada interaction and experimentation</b>. <br/><br/></p>
        <img src={roadmap} className="center" alt="Rats" style={{width: "100%"}}/>
      </header><br/><br/><br/>
    </div>
  );
}

export default Roadmap;