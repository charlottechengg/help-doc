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

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const Languages = [
	{ code: 'EN', label: 'English', phone: '1-264' },
	{ code: 'FR', label: 'French', phone: '355' },
];