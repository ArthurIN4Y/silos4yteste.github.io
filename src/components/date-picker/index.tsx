import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as s from "./styles";
import { CalendarIcon } from "../../assets/icons/Calendar";
export const DatePick = () => {
  const Icon = () => {
    return <CalendarIcon />;
  };
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        sx={s.DatePickerStyle}
        slots={{
          openPickerIcon: Icon,
        }}
      />
    </LocalizationProvider>
  );
};
