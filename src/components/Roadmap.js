import roadmap from '../images/roadmap.png';
import '../styles/Roadmap.css';

// Kanban
import done from '../images/kanban/done.png';
import doing from '../images/kanban/doing.png';
import todo from '../images/kanban/todo.png';

function Roadmap() {
  return (
    <div className="Roadmap">
      <header className="Roadmap-header">
        <img src={roadmap} className="Roadmap-logo" alt="Roadmap"/>
        <p>
        <ul>
          <li>Draw all the pixelart and accessories <img src={done} className="Kanban" alt="Done"/></li>
          <li>Develop the generative NFTs script <img src={done} className="Kanban" alt="Done"/></li>
          <li>Develop the Solidity smart contract <img src={done} className="Kanban" alt="Done"/></li>
          <li>Develop the frontend with React/Web3 <img src={done} className="Kanban" alt="Done"/></li>
          <li>Organize and verify all IPFS metadata <img src={done} className="Kanban" alt="Done"/></li>
          <li><b>Launch/Airdrop</b> of the <b style={{color: '#E54286'}}>DystoPunks V2</b> <img src={done} className="Kanban" alt="Done"/></li>
          <li>Upgrade the Discord/Twitter DystoBot <img src={doing} className="Kanban" alt="Doing"/></li>
          <li>Launch a big update for the website <img src={doing} className="Kanban" alt="Doing"/></li>
          <li>Develop the <b>Punkverse/Dystoverse</b> <img src={todo} className="Kanban" alt="To Do"/></li>
        </ul> 
        </p>
      </header>
    </div>
  );
}

export default Roadmap;
