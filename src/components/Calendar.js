import { React, useState } from "react";
import "../assets/css/commonComponent.css";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
const Calendar = () => {
  const [value, setValue] = useState(dayjs("2023-04-15"));

  const theme = createTheme({
    typography: {
      fontFamily: "Raleway, Arial",
      fontFamily: "Poppins",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
              @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: url('../assets/fonts/Poppins-Regular.ttf') format('trueType');
              }
            `,
      },
    },
  });

  return (
    <div className="calendar-part">
      <ThemeProvider theme={theme}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          sx={{ color: "#23BEE3", fontFamily: "Poppins" }}
        >
          <DateCalendar
            sx={{
              fontFamily: "Poppins",
              "& .MuiPickersDay-root": {
                "&.Mui-selected": {
                  backgroundColor: "#23BEE3",
                },
              },
            }}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};

export default Calendar;
