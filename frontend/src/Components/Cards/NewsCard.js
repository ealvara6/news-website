import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    content: {
        height: 275,
    },
}));


export default function NewsCard(props) {
    const classes = useStyles();
    const img = props.img;
    const title= props.title;
    const content = props.content;
    const url = props.url;


    const handleClick = () => {
        window.open(url, '_blank');
    }


    return(
        <Card className={classes.root} raised>
            <CardActionArea onClick={() => handleClick()}>
                <CardMedia
                    component="img"
                    alt="news image"
                    height="150"
                    image={img}
                    title={title}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary" onClick={() => handleClick()}>
                        Learn More
                    </Button>
                </CardActions>
        </Card>
    )
}