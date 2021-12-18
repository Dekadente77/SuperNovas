import '../styles/Text.css';
import '../styles/Global.css';
import {Button, Container} from '@material-ui/core';

const styleClaim = {
  backgroundColor: '#E54286',
  color: '#12173D',
  fontSize: 'calc(12px + 2vmin)',
  fontFamily: 'lemon',
  boxShadow: 'none',
  borderRadius: '0px',

  '&:hover': {
      backgroundColor: '#78FAE6',
      color: '#ffffff',
      boxShadow: 'none',
  }
};

function Footer() {
  return (
    <Container fixed style={{maxWidth: "700px"}}>
    <div className="Text">
        <p style={{color: '#FFFFFF'}}>
        <a href="https://discord.gg/QmTKkBCB" target="_blank" rel="noopener noreferrer"><b>Discord</b></a> | <a href="https://twitter.com/Supernovas_NFT" target="_blank" rel="noopener noreferrer"><b>Twitter</b></a>
        <br/>
        <b style={{color: '#f17123'}}>© 2021 SuperNovas</b><br/><br/>
        </p>
    </div>
    </Container>
  );
}

export default Footer;

