import '../styles/Text.css';
import '../styles/Global.css';
import '../styles/Factory.css';
import factory from '../images/factory.png';
import {Container} from '@material-ui/core';

function Text() {
  return (
    <Container fixed style={{maxWidth: "700px"}}>
    <div className="Text">
        <p><br/>
        <b>DystopianPunks V2</b> are a mix between generative and handmade <b>NFTs</b>. They are the continuation and total improvement of the <a href="https://opensea.io/collection/dystopianpunks" target="_blank" rel="noopener noreferrer"><b>DystopianPunks V1</b></a>, designed to build a <b>Punkverse</b>.
        <br/><br/> 
        <b>V1</b> holders will receive an exclusive <b style={{color: '#E54286'}}>Airdrop</b> of the 100 <b style={{color: '#E54286'}}>Animated Cyborgs</b>, in other words if you have a <b>V1</b> you will receive your <b>Punks</b> turned into cyborgs completely free even without paying gas fees. 
        <br/><br/>
        <h2>Claim free Punks</h2>
        Apart from the airdrop, <a href="https://opensea.io/collection/dystopianpunks" target="_blank" rel="noopener noreferrer"><b>V1</b></a> and <a href="https://opensea.io/collection/3d-dystopianpunks" target="_blank" rel="noopener noreferrer"><b>3D DystopianPunks</b></a> holders will be able to claim the same amount of <b>Punks</b> that they own completely free only by paying the gas fees, the snapshot will be on <b>June 17 at 07:07</b>.  
        <br/><br/>
        <div className="Factory">
        <header className="Factory-header">
        <img src={factory} className="Factory-logo" alt="DystoFactory Upgrade"/>
        </header>
        </div>
        In addition to the airdrop and free <b>Punks</b> to claim, if you have a <a href="https://opensea.io/collection/dystopianpunks" target="_blank" rel="noopener noreferrer"><b>V1</b></a> and an <a href="https://larvalabs.com/cryptopunks" target="_blank" rel="noopener noreferrer"><b>OG CryptoPunk</b></a> you will be able to access the DystoFactory Upgrade where you can dystopianize your <b>CryptoPunk</b> adapting it to the future with a facial insert and tech, completely free without paying gas, you just have to contact me by <a href="https://discord.gg/RMPkyYzZga" target="_blank" rel="noopener noreferrer"><b>Discord</b></a> or <a href="https://twitter.com/DystopianPunks" target="_blank" rel="noopener noreferrer"><b>Twitter</b></a> to list you.
        <br/><br/>
        <h2>Launch prices</h2>
          <ul>
            <li>#0001 - #0100 = <b style={{color: '#E54286'}}>Airdrop</b> for <b>V1</b> holders</li>
            <li>#0101 - #0130 = <b style={{color: '#E54286'}}>Reserved</b> for DystoFactory Upgrade and Giveaways</li>
            <br/>
            <li>#0131 - #0500 = <b style={{color: '#E54286'}}>0.02</b> <b>ETH</b></li>
            <li>#0501 - #1000 = <b style={{color: '#E54286'}}>0.03</b> <b>ETH</b></li>
            <li>#1001 - #1333 = <b style={{color: '#E54286'}}>0.04</b> <b>ETH</b></li>
            <li>#1334 - #1666 = <b style={{color: '#E54286'}}>0.06</b> <b>ETH</b></li>
            <li>#1667 - #1999 = <b style={{color: '#E54286'}}>0.08</b> <b>ETH</b></li>
            <li>#2000 - #2077 = <b style={{color: '#E54286'}}>0.10</b> <b>ETH</b></li>
          </ul> 
        </p>
    </div>
    </Container>
  );
}

export default Text;
