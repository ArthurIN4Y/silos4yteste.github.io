export const Style = ((width: string | undefined, borderRadius: string | undefined, backgroundColor: string | undefined, boxShadow: string | undefined) => ({
    "& fieldset": { border: 'none' },
    'background-color': backgroundColor ? backgroundColor : '#D9D9D940',
    'border-radius': borderRadius ? borderRadius : '10px',
    'width': width ? width : '379px',
    'box-shadow': boxShadow ? boxShadow : "none",
}))


