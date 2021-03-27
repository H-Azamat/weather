import { Box } from '@material-ui/core';

import WeatherCard from '../WeatherCard/WeatherCard';
import ForecastContainer from '../Forecast/ForecastContainer';

const Weather = ({forecast, ...props}) => {
	if(props.city){
		return (
			<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
				<WeatherCard {...props} />
				<ForecastContainer forecast={forecast} />
			</Box>
		)
	}else{
		return <Box textAlign="center" fontWeight="fontWeightBold" fontSize={42}>Выберите город</Box>
	}
}

export default Weather;