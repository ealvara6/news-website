import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 20,
    },
}))


export default function Category(props) {
    const classes = useStyles();
    const [isClicked, setIsClicked] = useState(false);
    const category = props.category;
    
    const handleClick = () => {
        if(isClicked)
            setIsClicked(false)
        else
            setIsClicked(true);
        props.onClick(category);
    }

    return(
        <Button className={classes.root} variant="contained" color={isClicked ? "secondary" : "primary"} onClick={() => handleClick()}>
            <Typography variant="subtitle2">{category}</Typography>    
        </Button>
    )
}