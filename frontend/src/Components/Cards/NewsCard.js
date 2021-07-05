import {React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Clipboard from '../Misc/Clipboard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
    },
    content: {
        [theme.breakpoints.down("xs")]: {
            height: 340,
        },
        height: 400,
    },
}));


export default function NewsCard(props) {
    const classes = useStyles();
    const [showShare, setShowShare] = useState(false);
    const [img, setImg] = useState(props.img);
    const title= props.title;
    const content = props.content;
    const url = props.url;


    const handleClick = () => {
        window.open(url, '_blank');
    }

    const handleImageError = () => {
        setImg("/Images/no_image.jpeg");
    }

    const handleShare = () => {
        navigator.clipboard.writeText(url)
        setShowShare(true);
    }

    const handleClose = () => {
        setShowShare(false);
    }

    return(
        <>
            <Card className={classes.root} raised>
                <CardActionArea onClick={() => handleClick()}>
                    <CardMedia
                        component="img"
                        onError={handleImageError}
                        alt="News Image"
                        height="150"
                        image={img ? img : handleImageError()}
                        title={title}
                    />
                    {showShare ? <Clipboard onClose={handleClose} /> : null}
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => handleShare()}>
                            Share
                        </Button>
                        <Button size="small" color="primary" onClick={() => handleClick()}>
                            Learn More
                        </Button>
                    </CardActions>
            </Card>
        </>
    )
}