export const Container = (marginTop: number | undefined, marginBottom: number | undefined) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: '391px',
    height: 'auto',
    boxShadow: 'inset 0px 2px 14px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    border: '1px solid #D9D9D9',
    padding: '12px',
    alignItems: "center",
    marginTop: marginTop,
    marginBottom: marginBottom,

    '@media (max-width: 768px)': {
        width: '276px',
    }
})

export const ValueBox = {
    border: '1px solid #D9D9D9',
    borderRadius: '10px',
    minWidth: '45px',
    height: '30px',
    alignItems: "center",
    justifyContent: "center",
    padding: '10px',
    display: "flex",
}