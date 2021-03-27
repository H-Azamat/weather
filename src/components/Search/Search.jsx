import { TextField } from '@material-ui/core';

const Seacrh = ({searchCityFunc}) => {
	return (
		<form onSubmit={(e) => {
			e.preventDefault()
			searchCityFunc(e.target[0].value)
			e.target[0].value = '';
		}} noValidate autoComplete="off">
		  <TextField className='search' id="outlined-basic" label="Введите город" variant="outlined" size="small" fullWidth />
		</form>
	)
}

export default Seacrh;