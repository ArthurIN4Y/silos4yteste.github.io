export const style = ((color: string | undefined) => ({
    width: '100%',
    height: '41px',
    'background-color': color ? color : '#D9D9D940',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))