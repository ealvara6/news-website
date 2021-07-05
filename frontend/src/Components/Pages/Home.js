import { React, useState, useEffect } from 'react';
import MainCards from '../Cards/MainCards';
import Grid from '@material-ui/core/Grid';
import Categories from '../Categories/Categories';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
    section: {
        borderWidth: 1,
        borderColor: theme.palette.primary.light,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
    },
}));

export default function Home(props) {
    const categories = ["general", "science", "business", "entertainment", "health", "sports", "technology"];
    const [info, setInfo] = useState(null);
    const [initialCategories, setIntialCategories] = useState(true);
    const [showCategories, setShowCategories] = useState(["general", "science", "business", "entertainment", "health", "sports", "technology"]);
    const [isLoaded, setIsLoaded] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        var data = {
            region: localStorage.getItem("region") || "us",
        }
        axios.get(`/api/homeNews/${data.region}`)
        .then(res => {
            console.log(res.data);
            setInfo(res.data.data);
            setIsLoaded(true);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleClick = (category) => {
        // turns off inital categories once a category is clicked
        if(initialCategories){
            setShowCategories([category]);
            setIntialCategories(false);
        }
        // adds categories once button is clicked
        else{
            if(showCategories.includes(category))
            // resets all categories is array would be empty
                if(showCategories.length === 1){
                    setShowCategories(["general", "science", "business", "entertainment", "health", "sports", "technology"])
                    setIntialCategories(true);
                }
                else
                // removes a category if the same button is clicked again
                    setShowCategories(showCategories.filter(item => item !== category));
            else
            // adds category to show list
                setShowCategories([...showCategories, category]);
        }
    }


    return(
        <Box>
            {isLoaded ?
            <Grid className={classes.root} container justify="center">
                <Grid item xs={12}>
                    <Categories categories={categories} onClick={handleClick} />
                </Grid>
                <Grid item xs={10} className={classes.section}>
                        <MainCards categories={categories} data={info} showCategories={showCategories} />
                </Grid>
            </Grid> : <Box display="flex" justifyContent="center" marginTop="150px"><CircularProgress /></Box>}
        </Box>
    )
}