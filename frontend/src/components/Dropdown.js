import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Dropdown() {
	return (
		<Autocomplete
		id="dropdown-list"
		sx={{ width: 300 }}
		options={Languages}
		autoHighlight
		getOptionLabel={(option) => option.label}
		renderOption={(props, option) => (
			<Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
			{/* <img
				loading="lazy"
				width="20"
				src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
				srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
				alt=""
			/> */}
			{option.label} ({option.code})
			</Box>
		)}
		renderInput={(params) => (
			<TextField
			{...params}
			label="Choose a language"
			inputProps={{
				...params.inputProps,
				autoComplete: 'new-password', // disable autocomplete and autofill
			}}
			/>
		)}
		/>
	);
}

// move to a different folder
const Languages = [
	{ code: 'EN', label: 'English' },
	{ code: 'FR', label: 'French' },
];
const Audios = [
	{ code: '1', label: 'Conversation1' },
	{ code: '2', label: 'Conversation1' },
];