export const style = ((width: string | undefined, borderRadius: string | undefined) => ({
    "& fieldset": { border: 'none' },
    'background-color': '#FFFFFF',
    'border-radius': borderRadius ? borderRadius : '10px',
    'width': width ? width : '200px',
    'box-shadow': "0px 8px 19px rgba(0, 0, 0, 0.15) ",

    '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
        color: '#DFBD2C',
    },

    '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon': {
        color: '#DFBD2C',
    },

    '@media (max-width: 768px)': {
        'background': 'none',
        'box-shadow': 'none',
    }
}))