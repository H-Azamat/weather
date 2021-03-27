import React from 'react';

import Forecast from '../Forecast/Forecast';

class ForecastContainer extends React.Component {

	filterForecast() {
		return [
				{forecast: [...this.createArr(0)], title: this.createArr(0, true)[0]},
				{forecast: [...this.createArr(1)], title: this.createArr(1, true)[1]},
				{forecast: [...this.createArr(2)], title: this.createArr(2, true)[2]},
				{forecast: [...this.createArr(3)], title: this.createArr(3, true)[3]},
				{forecast: [...this.createArr(4)], title: this.createArr(4, true)[4]},
				{forecast: [...this.createArr(5)], title: this.createArr(5, true)[5]}
			]
	}

	createArr(dayOfWeek, isDate = false){
		const days = this.props.forecast.map(elem => new Date(elem.dt_txt).toLocaleString('ru', {day: 'numeric'}))
		const filterDays = [...new Set(days)];

		if(isDate){
			return [...new Set(this.props.forecast.map(elem => 
				new Date(elem.dt_txt).toLocaleString('ru', {
					day: 'numeric', 
					month: 'long'
				})
				)
			)]
		}

		return this.props.forecast.filter((elem, id) => {
			return days[id] === filterDays[dayOfWeek] ? elem : ''})
	}

	render(){
		return (
			<Forecast weeks={this.filterForecast()} />
		)
	}
}

export default ForecastContainer;