import { Box } from '@material-ui/core';

import loadingSvg from '../../assets/loading.svg';

const Loading = () => {
	return(
		<Box display="flex" justifyContent="center" alignItems="center">
			<img width="150px" src={loadingSvg} alt="Загрузка..." />
		</Box>
	)
}

export default Loading;