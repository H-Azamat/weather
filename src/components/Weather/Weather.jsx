import { Box } from '@material-ui/core';

import WeatherCard from '../WeatherCard/WeatherCard';

const Weather = (props) => {
	return (
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
			<WeatherCard {...props} />
		</Box>
	)
}

export default Weather;