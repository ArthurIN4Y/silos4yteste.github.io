export const style = ((width: string | undefined, borderRadius: string | undefined) => ({
    "& fieldset": { border: 'none' },
    'background-color': '#FFFFFF',
    'border-radius': borderRadius ? borderRadius : '10px',
    'width': '200px',
    'box-shadow': "0px 8px 19px rgba(0, 0, 0, 0.15) ",
}))