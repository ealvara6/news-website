import { React, useState } from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import NewsCard from './NewsCard';
import Button from '@material-ui/core/Button';
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
    const [showButton, setShowButton] = useState(false);
    const [show, setShow] = useState(false);
    const regionName = props.regionName;
    const name = `Top ${props.name.toUpperCase()} news in ${regionName}`;
    var data = props.data;



    const setCardItems = () => {
        var cardItems = [];
        for(var i = 0; i < data.articles.length; i++){
            var content = data.articles[i].content;
            var newContent = null;

            // if content is of type string, replaces character count with Read More
            if(typeof content !== "object")
                newContent = content.replace(content.substring(content.indexOf("[")), "Read More");
            else
                newContent = content;
    
            cardItems.push(
                <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                    <NewsCard img={data.articles[i].urlToImage} title={data.articles[i].title} content={newContent} url={data.articles[i].url} />
                </Grid>);
        }
        return cardItems
    }

    const handleClick = () => {
        if(show){
            setShowButton(false);
            return setShow(false);
        }
        setShowButton(true);
        setShow(true);
    }

    return(
        <>
            <Collapse in={show} collapsedHeight={725}>
                <Grid className={classes.root} container spacing={4}>
                    <Grid item xs={12} sm={8} md={10}>
                    <Typography variant="h6">{name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={2}>
                        <Box display="flex" justifyContent="flex-end">
                        {showButton ? <Button color="secondary" onClick={() => handleClick()}>Collapse</Button> : <Button color="primary" onClick={() => handleClick()}>View All</Button>}
                        </Box>
                    </Grid>
                    {setCardItems()}
                </Grid>
            </Collapse>
        </>
    )
}