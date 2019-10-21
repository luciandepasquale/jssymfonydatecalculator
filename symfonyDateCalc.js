function getJsDate(endStartId){
   const yearComp = document.getElementById(endStartId+'_date_year');
    if (yearComp !== null && yearComp.tagName == 'SELECT'){
        var yearVal = yearComp.value;
    }
  const monthComp = document.getElementById(endStartId+'_date_month');
    if (monthComp !== null && monthComp.tagName == 'SELECT'){
        var monthVal = monthComp.value;
    }
  const dayComp = document.getElementById(endStartId+'_date_day');
  if (dayComp !== null && dayComp.tagName == 'SELECT'){
      var dayVal = dayComp.value;
  }
  const hourComp = document.getElementById(endStartId+'_time_hour');
  if (hourComp !== null && hourComp.tagName == 'SELECT'){
      var hourVal = hourComp.value;
  }
  const minuteComp = document.getElementById(endStartId+'_time_minute');
  if (minuteComp !== null && minuteComp.tagName == 'SELECT'){
      var minuteVal = minuteComp.value;
  }
  const secondComp = document.getElementById(endStartId+'_time_second');
  if (secondComp !== null && secondComp.tagName == 'SELECT'){
      var secondVal = secondComp.value;
  }
  const d = new Date(parseInt(yearVal), parseInt(monthVal)-1, parseInt(dayVal),parseInt(hourVal), parseInt(minuteVal), parseInt(secondVal), 0);
    return d;
}


function getDur(durId){
  let dur = {};
  const yearComp = document.getElementById(durId+'_years');
  if (yearComp !== null && yearComp.tagName == 'SELECT'){
      var yearVal = yearComp.value;
          dur.years = parseInt(yearVal);
  }
  const monthComp = document.getElementById(durId+'_months');
    if (monthComp !== null && monthComp.tagName == 'SELECT'){
        var monthVal = monthComp.value;
            dur.months = parseInt(monthVal);
    }
  const dayComp = document.getElementById(durId+'_days');
  if (dayComp !== null && dayComp.tagName == 'SELECT'){
      var dayVal = dayComp.value;
          dur.days = parseInt(dayVal);
  }
  const hourComp = document.getElementById(durId+'_hours');
  if (hourComp !== null && hourComp.tagName == 'SELECT'){
      var hourVal = hourComp.value;
          dur.hours = parseInt(hourVal);
  }
  const minuteComp = document.getElementById(durId+'_minutes');
  if (minuteComp !== null && minuteComp.tagName == 'SELECT'){
      var minuteVal = minuteComp.value;
          dur.minutes = parseInt(minuteVal);
  }
  const secondComp = document.getElementById(durId+'_seconds');
  if (secondComp !== null && secondComp.tagName == 'SELECT'){
      var secondVal = secondComp.value;
          dur.seconds = parseInt(secondVal);
  }

  return dur;
}

function getStartFromEndDur(){

  endDateComp = document.getElementsByClassName('LEndDate');
  endDateCompId = endDateComp[0].getAttribute('id');
  endDate = getJsDate(endDateCompId);

  durComp = document.getElementsByClassName('LDuration');
  durCompId = durComp[0].getAttribute('id');
  dur = getDur(durCompId);
  startDate = new Date(endDate);
  startDate = new Date(startDate.setFullYear(endDate.getFullYear() - dur.years));
  startDate = new Date(startDate.setMonth(startDate.getMonth() - dur.months));
  startDate = new Date(startDate.setDate(startDate.getDate() - dur.days));
  startDate = new Date(startDate.setHours(startDate.getHours() - dur.hours));
  startDate = new Date(startDate.setMinutes(startDate.getMinutes() - dur.minutes));
  startDate = new Date(startDate.setSeconds(startDate.getSeconds() - dur.seconds));
    return startDate;
}

function getEndFromStartDur(){

  startDateComp = document.getElementsByClassName('LStartDate');
  startDateCompId = startDateComp[0].getAttribute('id');
  startDate = getJsDate(startDateCompId);

  durComp = document.getElementsByClassName('LDuration');
  durCompId = durComp[0].getAttribute('id');
  dur = getDur(durCompId);
  endDate = new Date(startDate);
  endDate = new Date(endDate.setFullYear(startDate.getFullYear() + dur.years));
  endDate = new Date(endDate.setMonth(endDate.getMonth() + dur.months));
  endDate = new Date(endDate.setDate(endDate.getDate() + dur.days));
  endDate = new Date(endDate.setHours(endDate.getHours() + dur.hours));
  endDate = new Date(endDate.setMinutes(endDate.getMinutes() + dur.minutes));
  endDate = new Date(endDate.setSeconds(endDate.getSeconds() + dur.seconds));
  return endDate;
}

function getDurFromStartEnd(){

  startDateComp = document.getElementsByClassName('LStartDate');
  startDateCompId = startDateComp[0].getAttribute('id');
  startDate = getJsDate(startDateCompId);

  endDateComp = document.getElementsByClassName('LEndDate');
  endDateCompId = endDateComp[0].getAttribute('id');
  endDate = getJsDate(endDateCompId);
//calculated in terms of milliseconds
  millisec = (endDate.getTime() - startDate.getTime());

   years = Math.floor(millisec/1000/60/60/24/365.25);

    // years = (endDate.getFullYear() - startDate.getFullYear());
     newDate = new Date(startDate.setFullYear(startDate.getFullYear() + years));
     millisec = (endDate.getTime() - newDate.getTime());
     months = Math.floor(millisec/1000/60/60/24/31);
     newDate = new Date(newDate.setMonth(newDate.getMonth() + months));
     millisec = (endDate.getTime() - newDate.getTime());
     days = Math.floor(millisec/1000/60/60/24);
     newDate = new Date(newDate.setDate(newDate.getDate() + days));
     millisec = (endDate.getTime() - newDate.getTime());
     hours = Math.floor(millisec/1000/60/60);
     newDate = new Date(newDate.setHours(newDate.getHours() + hours));
     millisec = (endDate.getTime() - newDate.getTime());
     minutes = Math.floor(millisec/1000/60);
     newDate = new Date(newDate.setMinutes(newDate.getMinutes() + minutes));
     millisec = (endDate.getTime() - newDate.getTime());
     seconds = Math.floor(millisec/1000);
     newDate = new Date(newDate.setSeconds(newDate.getSeconds() + seconds));
    // months = (endDate.getMonth()- newDate.getMonth());
    // months = (d2.getFullYear() - d1.getFullYear()) * 12;
    // months -= d1.getMonth() + 1;
    // months += d2.getMonth();
    // return months <= 0 ? 0 : months;
    // newDate = new Date(startDate.setMonth(startDate.getMonth() + months));
    // days = (endDate.getDate()- newDate.getDate());
    // newDate = new Date(startDate.setDate(startDate.getDate() + days));
    // hours = (endDate.getHours()- newDate.getHours());
    // newDate = new Date(startDate.setHours(startDate.getHours() + hours));
    // minutes = (endDate.getMinutes()- newDate.getMinutes());
    // newDate = new Date(startDate.setMinutes(startDate.getMinutes() + minutes));
    // seconds = (endDate.getSeconds()- newDate.getSeconds());
    // newDate = new Date(startDate.setSeconds(startDate.getSeconds() + seconds));

  // monthsdec = ((duration % 365.25) / 365.25) * 12;
  // months = Math.floor(monthsdec);
  // daysdec = (monthsdec % 1) * ;
  // days =

  return {'years':years ,'months':months , 'days':days , 'hours':hours , 'minutes':minutes , 'seconds':seconds}
}

function changeStartFromEndDur(){
  let startDate = getStartFromEndDur();
    startDateComp = document.getElementsByClassName('LStartDate');
  startDateCompId = startDateComp[0].getAttribute('id');
      let yearComp = document.getElementById(startDateCompId+'_date_year');
      let isOption = false;
        for(let i=0; i<yearComp.length; i++){
          if(startDate.getFullYear()==yearComp[i].value){
            isOption = true;
          }
          if(yearComp[i].value == 0){
            yearComp.remove(i);
          }
        }
    if(isOption){
      yearComp.value = startDate.getFullYear();
    }else { var opt = document.createElement('option');
       opt.innerHTML = startDate.getFullYear();
       opt.value = 0;
      yearComp.appendChild(opt);
      yearComp.value = 0;
    }
  document.getElementById(startDateCompId+'_date_month').value = startDate.getMonth() + 1;
  document.getElementById(startDateCompId+'_date_day').value = parseInt(startDate.getDate());
  document.getElementById(startDateCompId+'_time_hour').value = startDate.getHours();
  document.getElementById(startDateCompId+'_time_minute').value = startDate.getMinutes();
  document.getElementById(startDateCompId+'_time_second').value = startDate.getSeconds();
}

function changeEndFromStartDur(){
  let endDate = getEndFromStartDur();
    endDateComp = document.getElementsByClassName('LEndDate');
  endDateCompId = endDateComp[0].getAttribute('id');

  let yearComp = document.getElementById(endDateCompId+'_date_year');
  let isOption = false;
    for(let i=0; i<yearComp.length; i++){
      if(endDate.getFullYear()==yearComp[i].value){
        isOption = true;
      }
      if(yearComp[i].value == 0){
        yearComp.remove(i);
      }
    }
    if(isOption){
      yearComp.value = endDate.getFullYear();
    }else { var opt = document.createElement('option');
       opt.innerHTML = endDate.getFullYear();
       opt.value = 0;
      yearComp.appendChild(opt);
      yearComp.value = 0;
    }
  document.getElementById(endDateCompId+'_date_month').value = endDate.getMonth() + 1;
  document.getElementById(endDateCompId+'_date_day').value = parseInt(endDate.getDate());
  document.getElementById(endDateCompId+'_time_hour').value = endDate.getHours();
  document.getElementById(endDateCompId+'_time_minute').value = endDate.getMinutes();
  document.getElementById(endDateCompId+'_time_second').value = endDate.getSeconds();
}

function changeDurFromStartEnd(){
  let dur = getDurFromStartEnd();
  durComp = document.getElementsByClassName('LDuration');
  durId = durComp[0].getAttribute('id');

  const yearComp = document.getElementById(durId+'_years');
  if (yearComp !== null && yearComp.tagName == 'SELECT'){
  let isOption = false;
  for(let i=0; i<yearComp.length; i++){
    if(dur.years === yearComp[i].value){
      isOption = true;
    }
    if(yearComp[i].value == 0){
      yearComp.remove(i);
    }
  }
  if(isOption){
      yearComp.value = dur.years;
  }else {
    var opt = document.createElement('option');
     opt.innerHTML = dur.years;
     opt.value = 0;
    yearComp.appendChild(opt);
    yearComp.value = 0;
  }
}
  const monthComp = document.getElementById(durId+'_months');
    if (monthComp !== null && monthComp.tagName == 'SELECT'){
        monthComp.value = dur.months;

    }
  const dayComp = document.getElementById(durId+'_days');
  if (dayComp !== null && dayComp.tagName == 'SELECT'){
      dayComp.value = dur.days;

  }
  const hourComp = document.getElementById(durId+'_hours');
  if (hourComp !== null && hourComp.tagName == 'SELECT'){
      hourComp.value = dur.hours;

  }
  const minuteComp = document.getElementById(durId+'_minutes');
  if (minuteComp !== null && minuteComp.tagName == 'SELECT'){
      minuteComp.value = dur.minutes;

  }
  const secondComp = document.getElementById(durId+'_seconds');
  if (secondComp !== null && secondComp.tagName == 'SELECT'){
      secondComp.value = dur.seconds;

  }
}
