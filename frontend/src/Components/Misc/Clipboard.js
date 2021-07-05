import { React, useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        [theme.breakpoints.down("xs")]: {
            marginTop:  theme.spacing(42),
        },
        marginTop: theme.spacing(48),
        marginLeft: theme.spacing(1),
    },
    content: {
        width: theme.spacing(20),
        height: theme.spacing(5),
        borderRadius: 10,
        backgroundColor: theme.palette.success.light,
        color: theme.palette.success.contrastText,
    },
    info: {
        marginLeft: theme.spacing(1),
    },
}));


export default function Clipboard(props) {
    const classes = useStyles();
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 2000);
        setTimeout(() => {
           props.onClose(); 
        }, 3000);
    })

    return(
        <Fade in={show} timeout={1500}>
            <Box className={classes.root}>
                <Box display="flex" alignItems="center" className={classes.content}>
                    <Typography variant="caption" className={classes.info}>Link Copied to Clipboard!</Typography>
                </Box>
            </Box>
        </Fade>
    )
}