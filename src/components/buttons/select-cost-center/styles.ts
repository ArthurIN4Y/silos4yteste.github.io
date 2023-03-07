export const style = ((width: string | undefined, borderRadius: string | undefined) => ({
    "& fieldset": { border: 'none' },
    'background-color': '#D9D9D940',
    'border-radius': borderRadius ? borderRadius : '10px',
    'width': width ? width : '379px',
}))