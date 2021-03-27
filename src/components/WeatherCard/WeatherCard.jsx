import { Box, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useState, useEffect } from 'react';

import sun from '../../assets/sun.svg';
import cloud from '../../assets/cloud.svg';
import rainy from '../../assets/rainy.svg';
import snowy from '../../assets/snowy.svg';
import drizzle from '../../assets/drizzle.svg';

const useStyles = makeStyles({
    card: {
        width: '300px',
        margin: '30px 0',
        padding: '10px 0'
    },
    cardImg: {
        height: '80px',
        marginRight: '10px'
    },
    cardContent: {
        padding: '5px 0'
    },
})


const WeatherCard = ({city, temp, feelsLike, description, weather, otherData, date = null}) => {

    let [weatherImg, setWeatherImg] = useState();
    useEffect(() => {
        switch(weather){
            case 'Snow': setWeatherImg(snowy); break;
            case 'Clouds': setWeatherImg(cloud); break; 
            case 'Drizzle': setWeatherImg(drizzle); break;
            case 'Rain': setWeatherImg(rainy); break;
            case 'Clear': setWeatherImg(sun); break;
            default: setWeatherImg(sun); 
        }
    }, [weather])

    const classes = useStyles()
    return(
        <Card raised className={classes.card}>
            <CardContent>
                <Box fontWeight="fontWeightBold" align="center" fontSize={28} letterSpacing={1.5}>{city}</Box>

                <Box display="flex" justifyContent="center" alignItems="center" className={classes.cardContent}>
                    <img src={weatherImg} alt={weather} className={classes.cardImg} />
                    <Box component="span" textAlign="center" fontWeight="fontWeightBold" fontSize={38}>{temp}&#8451;</Box>
                </Box>

                <Box textAlign="center" fontWeight="fontWeightRegular" fontSize={16}>{description}</Box>
                <Box textAlign="center" fontWeight="fontWeightRegular" fontSize={15}>Ощущается как: {feelsLike}&#8451;</Box>
                <Box>
                    <Box textAlign="center" fontWeight="fontWeightRegular" fontSize={15}>Влажнось: {otherData.humidity}%</Box>
                    <Box textAlign="center" fontWeight="fontWeightRegular" fontSize={15}>Ветер: {otherData.windSpeed}км/ч</Box>
                </Box>
                {date ? <Box textAlign="center" fontWeight="fontWeightBold" fontSize={13}><br />{date}</Box> : ''}
            </CardContent>
        </Card>
    )
}

export default WeatherCard;