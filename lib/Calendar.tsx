import { useEffect, useState } from "react";
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
} from "date-fns";
import { Grid, Box } from "@mui/material";
import { useMobile } from 'lib/utils/useMobile'
import { useWithLayoutStyles } from 'components/atoms/layout/useWithLayoutStyles';

interface Props {
  setOpenCalendar: () => void
}

const Calendar = ({ showDetailsHandle, handleDayClick, currentDate, isDisabled, setOpenCalendar, openCalendar }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selected, setselected] = useState(format(new Date(), "EEEE, MMMM dd"));

  const { isMobile } = useMobile()
  const calendarStyle = useWithLayoutStyles({ isMobile })

useEffect(()=>{
  setCurrentMonth(currentDate);
  setSelectedDate(currentDate);
  setselected(format(currentDate, "EEEE, MMM dd"));
  setTimeout(() => {
    renderCells() 
  });
},[currentDate])

//
  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };

  const onDateClickHandle = (day, dayStr) => {
    setSelectedDate(day);
    showDetailsHandle(dayStr);
  };

  /* Week Name */
  const renderDays = () => {
    const dateFormat = "e";
    const days:string[] = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });
    for (let i = 0; i < 7; i++) {
      days.push(format(addDays(startDate, i), dateFormat));
    }
    return <Box className={calendarStyle.days}>
      {
        days.map((day, index)=>{
          day = day === '1' ? 'S' : day === '2' ? 'M' : day === '3' ? 'T' : day === '4' ? 'W' : day === '5' ? 'T' : day === '6' ? 'F' : day === '7' ? 'S':'';
          return (
            <Grid key={index} className={`col col-center ${calendarStyle.calendar_week}`}>{day}</Grid>
          )
        })
      }
      </Box>;
  };
  
  function isYesterday(date) {
    const today = new Date();
    const selectDateUser = new Date(date);
   
    if (
      (today.getDate() == selectDateUser.getDate() && 
        today.getMonth() == selectDateUser.getMonth() &&
        today.getFullYear() === selectDateUser.getFullYear()) ||
      (today.getDate() < selectDateUser.getDate() &&
        today.getMonth() == selectDateUser.getMonth() &&
        today.getFullYear() === selectDateUser.getFullYear()) ||
      (today.getMonth() < selectDateUser.getMonth() &&
        today.getFullYear() === selectDateUser.getFullYear()) ||
      today.getFullYear() < selectDateUser.getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  }

  const renderCells = () => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 6 });
    const dateFormat = "d";
    const rows:any[] = [];
    let days:any[] = [];
    let day = startDate;
    let formattedDate = "";
    let formattedMonth = "";
    let count = 0;
    
    while (day <= endDate) {
      count = count + 1;
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const dayStr = format(cloneDay, "ccc dd MMM yy");
        const d = new Date(dayStr);
        let checkDisabled = new Date(day);

        const correctTimeAccordingToCalendar = checkDisabled.getHours() + 12;
        checkDisabled.setHours(correctTimeAccordingToCalendar);

        days.push(
          <Box className={`col cell ${calendarStyle.calendar_date}
            ${i===6 && `${calendarStyle.disabled_date} disabled`}
            ${isDisabled(checkDisabled) ? 'not_available' :'availableDate'}
            ${isYesterday(format(cloneDay, "ccc dd MMM yy")) ? '' :`${calendarStyle.not_selectable}`}
            ${isSameDay(day, new Date()) ? "today" : ''}
            ${isSameDay(day, selectedDate) ? 'selected' : ""}`}
            onClick={() => {const dayStr = format(cloneDay, "ccc dd MMM yy");}}
          >
            {
              isYesterday(format(cloneDay, "ccc dd MMM yy")) ?
              i===6 && !isDisabled(day) ? <Box component="span" className="disabled">{formattedDate}</Box> :  (<Box component="span" onClick={() => {
                onDateClickHandle(cloneDay, dayStr);
                setselected(format(cloneDay, "EEEE, MMMM dd"));
                handleDayClick(checkDisabled,{})}}>
                  {formattedDate}</Box>):(<Box component="span">{formattedDate}</Box>)
            }
          </Box>
          );
        day = addDays(day, 1);
      }
      if (rows.length == 0) {
        rows.push(<Box className={`${calendarStyle.calendar_week_wrap}`}>{days}</Box>);
      }
      days = [];
    }
    return <>{new Set(rows)}</>;
  };
  const renderFooter = () => {
    return (
      <>
        <div style={{position:'absolute', left: '16px', top:'30px', cursor: "pointer", fontWeight: "bold", display:'inline-block'}} onClick={() => changeWeekHandle("prev")}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{width:'15px', height:'15px', verticalAlign:'text-top'}}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </div>
          <div style={{position:'absolute', right: '16px', top:'30px', cursor: "pointer", fontWeight: "bold", display: 'inline-block'}} onClick={() => changeWeekHandle("next")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" style={{width:'15px', height:'15px', verticalAlign:'text-top'}}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
      </>
    );
  };

  return (
    <Box className="calendar" sx={{backgroundColor:'#ffffff', px:5, py:2, position:'relative', borderTop:'3px solid #52433D', borderBottom:'3px solid #52433D'}}>
      {renderFooter()}
      {renderDays()}
      {renderCells()}
      <Box className={calendarStyle.calendarDropdownDate}>
        <Box component="span" className={calendarStyle.calendarDropdownDate} onClick={()=>setOpenCalendar(!openCalendar)}>
          {selected}
          {
            openCalendar ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M9 5L5 1L1 5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;