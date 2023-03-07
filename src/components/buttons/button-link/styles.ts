import { theme } from "../../../utils/theme";

export const Style = ((fontSize: string | undefined, color: string | undefined) => ({
    color: color ? color : theme.palette.primary.main,
    'font-size': fontSize ? fontSize : '12px',
    'text-transform': 'none',
    '&:hover': { backgroundColor: 'transparent' },
}))