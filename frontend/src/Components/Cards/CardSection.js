import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import NewsCard from './NewsCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));


export default function CardSection(props) {
    const classes = useStyles();
    const regionName = props.regionName;
    const name = `Top ${props.name.toUpperCase()} news in ${regionName}`
    const data = props.data

    const setCardItems = () => {
        var cardItems = [];
        for(var i = 0; i < 8; i++){
            cardItems.push(<Grid key={i} item xs={3}><NewsCard img={data.articles[i].urlToImage} title={data.articles[i].title} content={data.articles[i].content} url={data.articles[i].url} /></Grid>);
        }
        // for(const article in data.articles){
        //     cardItems.push(<Grid item xs={3}><NewsCard img={article.urlToImage} title={article.title} content={article.content} url={article.url} /></Grid>);
        // }
        // cardItems = data.articles.map((article) => <Grid item xs={3}><NewsCard img={article.urlToImage} title={article.title} content={article.content} url={article.url} /></Grid>);
        return cardItems
    }

    return(
        <>
            <Grid className={classes.root} container spacing={4}>
                <Grid item xs={11}>
                <Typography variant="h6">{name}</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button>View All</Button>
                    </Box>
                </Grid>
                {setCardItems()}
            </Grid>
        </>
    )
}