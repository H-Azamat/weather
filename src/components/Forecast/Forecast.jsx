import { Box } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import WeatherCard from '../WeatherCard/WeatherCard';
import Loading from '../Loading/Loading';

const Forecast = ({weeks}) => {

	if(weeks[0].forecast.length > 0){
		return(
			<Box>
				<Box textAlign="center" fontWeight="fontWeightBold" fontSize={38}>Прогноз на неделю</Box><br />
				<Box>
					{
						weeks.map((day, dayId) => {
							return <Accordion>
						        <AccordionSummary
						          expandIcon={<ExpandMoreIcon />}
						          aria-controls="panel1a-content"
						          id="panel1a-header"
						        >
						          <Box component="span" fontWeight="fontWeightMedium" fontSize={20}>{weeks[dayId].title}</Box>
						        </AccordionSummary>
						        <AccordionDetails>
						        	<Box display="flex" flexWrap="wrap" justifyContent="space-around">
						        		{
							        		weeks[dayId].forecast.map((forecast, forecastId) => {
							        			return <WeatherCard city='' temp={Math.round(forecast.main.temp)}
								          		feelsLike={Math.round(forecast.main.feels_like)} description={forecast.weather[0].description} 
								          		weather={forecast.weather[0].main} otherData={{
											      'humidity': forecast.main.humidity,
											      'windSpeed': Math.round(forecast.wind.speed * 3.6)
											    }} date={forecast.dt_txt} />
							        		})
							        	}
						        	</Box>
						        </AccordionDetails>
					      	</Accordion>
						})
					}
				</Box><br />
			</Box>
		)}
		else{
			return <Loading />
		}
}

export default Forecast;