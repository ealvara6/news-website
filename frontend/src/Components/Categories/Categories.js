import React from 'react';
import Grid from '@material-ui/core/Grid';
import Category from './Category';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
}));




export default function Categories(props) {
    const classes = useStyles();
    const categories = props.categories;

    const handleClick = (category) => {
        props.onClick(category);
    }
    const categoryList = categories.map((category) =><Grid key={category} item><Category category={category} onClick={handleClick} /></Grid>);

    return(
        <Grid container spacing={1} justify="center" className={classes.root}>
            {categoryList}
        </Grid>
    )
}