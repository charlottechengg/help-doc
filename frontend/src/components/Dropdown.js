import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Dropdown({type}) {


	return (
		<Autocomplete
			id="dropdown-list"
			sx={{ width: 150 }}
			options={type == "Languages" ? Languages : Audios}
			autoHighlight
			getOptionLabel={(option) => option.name}
			renderOption={(props, option) => (
				<Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
				{/* <img
					loading="lazy"
					width="20"
					src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
					srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
					alt=""
				/> */}
				{option.name} ({option.code})
				</Box>
			)}
			renderInput={(params) => (
				<TextField
				{...params}
				name="Choose"
				inputProps={{
					...params.inputProps,
					autoComplete: 'new-password', // disable autocomplete and autofill
				}}
				label={type} />
			)}
		/>
	);
}

// move to a different folder
const Languages = [
	{ code: 'EN', name: 'English' },
	{ code: 'FR', name: 'French' },
];
const Audios = [
	{ code: '1', name: 'Conversation1' },
	{ code: '2', name: 'Conversation1' },
];