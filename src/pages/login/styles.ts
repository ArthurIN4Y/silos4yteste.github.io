export const Container = {
    'width': '100vw',
    'height': '100vh',
    'display': 'flex',
    'flex-direction': 'column',
}

export const ContainerHeader = {
    'display': 'flex',
    'flexDirection': 'row',
    'justifyContent': 'flex-end',
    'margin': '10px 50px 60px'
}

export const ContainerContent = {
    'display': 'flex',
    'flexDirection': 'column',
    'justifyContent': 'center',
    'alignItems': 'center',

    '@media (max-width: 768px)': {
        'widht': '370px'
    }
}

export const Container_2 = {
    '@media (max-width: 768px)': {
        margin: '0px 0px 0px 0px',
        display: 'flex',
        justifyContent: 'flex-start',
        width: '320px',
    }
}

export const ContainerFooter = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    textAlign: 'center',
}
