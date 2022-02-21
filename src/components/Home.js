import supernovas from '../images/supernovas.gif';
import '../styles/Home.css';

function Home() {
  return (
    
    <div className="Home">
      <header className="Home-header">
        <p className="Peque "><br/><br/><b style={{color: '#ffff02'}}>SuperNovas NFTs</b>, where you can find aliens, zombies, robots and girls of different <b style={{color: '#f17123'}}>galaxies</b>. This voyage has a futuristic orientation, that aims to subdue different ways of integrating <b style={{color: '#f17123'}}>art, community and technology</b> in the fabulous NFT world. <br/><br/></p>
        <img src={supernovas} className="center imgborder" alt="Rats" style={{width: "90%", maxWidth:"1000px"}}/>
      </header><br/><br/><br/>
    </div>
  );
}

export default Home;