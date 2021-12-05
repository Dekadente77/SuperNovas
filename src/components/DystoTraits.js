import '../styles/DystoTable.css';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Link} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Avatar} from '@material-ui/core';
import {AvatarGroup} from '@material-ui/lab';

// Cyborgs
import cyborg1 from '../images/cyborgs/cyborg1.gif';
import cyborg2 from '../images/cyborgs/cyborg2.gif';
import cyborg3 from '../images/cyborgs/cyborg3.gif';
import cyborg4 from '../images/cyborgs/cyborg4.gif';
import cyborg5 from '../images/cyborgs/cyborg5.gif';
import cyborg6 from '../images/cyborgs/cyborg6.gif';
import cyborg7 from '../images/cyborgs/cyborg7.gif';

const useStyles = makeStyles({
    DystoTraits: {
        maxWidth: 700, 
        margin: 'auto',
        fontFamily: 'm5x7',
        fontSize: 'calc(12px + 2vmin)',
    },
    DystoTableTittle: {
        fontSize: 'calc(12px + 3vmin)',
        marginBottom: '20px',
        marginLeft: '15px',
        marginTop: '40px',
        marginRight: '-25px',
    },
    DystoTableLine: {
        borderTop: '1px solid rgba(224, 224, 224, 1)',
    },
    DystoTableColor: { 
        fontFamily: 'm5x7',
        fontSize: 'calc(12px + 2vmin)',
        color: '#E54286',
    }
})

const data= [
    { attribute: 'Cyborg', number: 100, example: <Link href={cyborg1} target="_blank" rel="noopener noreferrer" style={{ border: "0px"}}><Avatar style={{ height: "48px", width: "48px"}} variant="square" src={cyborg1} /></Link>, examples: <AvatarGroup max={6} spacing={0}>
    <Link href={cyborg2} target="_blank" rel="noopener noreferrer" style={{ border: "0px"}}><Avatar style={{ height: "48px", width: "48px"}} variant="square" src={cyborg2} /></Link>
    <Link href={cyborg3} target="_blank" rel="noopener noreferrer" style={{ border: "0px"}}><Avatar style={{ height: "48px", width: "48px"}} variant="square" src={cyborg3} /></Link>
    <Link href={cyborg4} target="_blank" rel="noopener noreferrer" style={{ border: "0px"}}><Avatar style={{ height: "48px", width: "48px"}} variant="square" src={cyborg4} /></Link>
    <Link href={cyborg5} target="_blank" rel="noopener noreferrer" style={{ border: "0px"}}><Avatar style={{ height: "48px", width: "48px"}} variant="square" src={cyborg5} /></Link>
    <Link href={cyborg6} target="_blank" rel="noopener noreferrer" style={{ border: "0px"}}><Avatar style={{ height: "48px", width: "48px"}} variant="square" src={cyborg6} /></Link>
    <Link href={cyborg7} target="_blank" rel="noopener noreferrer" style={{ border: "0px"}}><Avatar style={{ height: "48px", width: "48px"}} variant="square" src={cyborg7} /></Link>
  </AvatarGroup> }
];

function DystoTraits() {
    const classes=useStyles();
    return (
        <div className="DystoTraits">
            <TableContainer>
                <Table className={classes.DystoTraits}>
                    <TableHead>
                    <h4 className={classes.DystoTableTittle}>Animated</h4>
                        <TableRow className={classes.DystoTableLine}>
                            <TableCell className={classes.DystoTraits}><b>Attribute&nbsp;</b></TableCell>
                            <TableCell className={classes.DystoTraits}><b>#</b></TableCell>
                            <TableCell className={classes.DystoTraits}><b>Example</b></TableCell>
                            <TableCell className={classes.DystoTraits}><b>More Examples</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map (cell => (
                            <TableRow>
                                <TableCell className={classes.DystoTableColor}><b>{cell.attribute}</b></TableCell>
                                <TableCell className={classes.DystoTraits}>{cell.number}</TableCell>
                                <TableCell className={classes.DystoTraits}>{cell.example}</TableCell>
                                <TableCell className={classes.DystoTraits}>{cell.examples}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DystoTraits;
