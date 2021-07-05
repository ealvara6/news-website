import { React, useState } from 'react';
import LocationModal from './LocationModal';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    title: {
        flexGrow: 1,
    },
    location: {
        color: theme.palette.primary.contrastText,
    },
}));



export default function Header(props) {
    const classes = useStyles();
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }

    return(
        <>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton>
                        <img src="/Images/news.png" alt="Webiste Icon" />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>News</Typography>
                    {localStorage.getItem("region") ? <Button className={classes.location} onClick={() => handleModal()}>{localStorage.getItem("regionName")}</Button> : <Button className={classes.location} onClick={() => handleModal()}>Change Location</Button>}
                    {showModal ? <LocationModal open={true} onClose={handleClose} /> : null}
                </Toolbar>
            </AppBar>
        </>
    )
}