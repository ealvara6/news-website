import {React, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import CardSection from './CardSection';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        marginBottom: theme.spacing(10),
    },
}));


export default function MainCards(props) {
    const classes = useStyles();
    const [show, setShow] = useState(true);
    const categories = props.categories;
    const showCategories = props.showCategories;
    const regionName = localStorage.getItem("regionName") || "United States";
    const region = localStorage.getItem("region") || "us";
    const data = props.data;

    useEffect(() => {
        setShow(true);
        return () => {
            setTimeout(() => {
                setShow(false);
            }, 5000)
        }
    },[])


    const categoryList = () => {
        const list = [];
        categories.forEach(category => {
            if(showCategories.includes(category)){
                list.push(
                    <Box key={category} className={classes.section}>
                        <CardSection region={region} regionName={regionName} show={show} name={category} endPoint={"top-headlines"} category={category} data={data[category]}/>
                    </Box>);
            }
        });
        return list;
    }

    return(
        <>
            {categoryList()}
        </>
    );
}