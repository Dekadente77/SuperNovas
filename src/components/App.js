import logo from '../images/logo.gif';
import '../styles/App.css';
import {Button} from '@material-ui/core';

const styleClaim = {
  backgroundColor: '#ffff02',
  top: '10px',
  position: 'relative',
  color: '#000000',
  fontSize: 'calc(12px + 2vmin)',
  fontFamily: 'lemon',
  boxShadow: 'none',
  borderRadius: '10px',

  '&:hover': {
      backgroundColor: '#8CFF9B',
      color: '#ffffff',
      boxShadow: 'none',
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="DystoPunks V2" />
        <p style={{lineHeight: "calc(12px + 2vmin)"}}>
        <b style={{color: '#ffff02'}}>SuperNovas</b> are a group of 3.333 intergalatic girls with outstanding <br/> style and out of these world vibes, creating a fun and diverse universe <br/> in the midst of the nft world.<br/><br/>   
        <Button style={styleClaim} variant="contained" size="small" href="https://discord.gg/YYSRTdcbvx" target="_blank" rel="noopener noreferrer"><b>Enter the Discord</b></Button>    
        <br/><br/><br/></p>
      </header>  
    </div>
  );
}

export default App;
