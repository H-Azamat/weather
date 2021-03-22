import { TextField } from '@material-ui/core';

const Seacrh = ({getWeather}) => {
	return (
		<form onSubmit={(e) => {
			e.preventDefault()
			getWeather(e.target[0].value)
			e.target[0].value = '';
		}} noValidate autoComplete="off">
		  <TextField id="outlined-basic" label="Введите город" variant="outlined" size="small" fullWidth />
		</form>
	)
}

export default Seacrh;