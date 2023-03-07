import { theme } from "../../../utils/theme";

export const Style = ((width: string | undefined, height: string | undefined, borderRadius: string | undefined, color: string | undefined, widthRes: string | undefined, boxShadow: string | undefined) => ({
    'width': width ? width : '124px',
    'height': height ? height : '34px',
    'text-transform': 'none',
    'border-radius': borderRadius ? borderRadius : '10px',
    'background-color': color ? color : theme.palette.primary.main,
    'box-shadow': boxShadow ? boxShadow : 'none',
    '&:hover': { backgroundColor: color ? color : '#E3C12C' },
    '@media (max-width: 768px)': {
        'width': widthRes ? widthRes : '154px',
    }
}))