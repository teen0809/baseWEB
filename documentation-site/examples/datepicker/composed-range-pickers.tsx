import React, {useState} from 'react';

import {useStyletron} from 'baseui';
import {FormControl} from 'baseui/form-control';
import {ArrowRight} from 'baseui/icon';
import {DatePicker} from 'baseui/datepicker';
import {TimePicker} from 'baseui/timepicker';

const START_DATE = new Date(2019, 3, 1, 12, 0, 0);
const END_DATE = new Date(2019, 3, 10, 16, 0, 0);

export default () => {
  const [css, theme] = useStyletron();
  const [dates, setDates] = useState([START_DATE, END_DATE]);

  return (
    <div className={css({display: 'flex', alignItems: 'center'})}>
      <div
        className={css({
          width: '120px',
          marginRight: theme.sizing.scale300,
        })}
      >
        <FormControl label="Start Date" caption="YYYY/MM/DD">
          <DatePicker
            value={dates}
            onChange={({date}) => setDates(date as Array<Date>)}
            timeSelectStart
            range
            mask="9999/99/99"
            displayValueAtRangeIndex={0}
            placeholder="Start Date"
          />
        </FormControl>
      </div>

      <div
        className={css({
          width: '120px',
          marginRight: theme.sizing.scale300,
        })}
      >
        <FormControl label="Start Time" caption="HH:MM">
          <TimePicker
            value={dates[0]}
            onChange={time => setDates([time, dates[1]])}
          />
        </FormControl>
      </div>

      <div
        className={css({
          marginRight: theme.sizing.scale300,
        })}
      >
        <ArrowRight size={24} />
      </div>

      <div
        className={css({
          width: '120px',
          marginRight: theme.sizing.scale300,
        })}
      >
        <FormControl label="End Date" caption="yyyy/MM/DD">
          <DatePicker
            value={dates}
            onChange={({date}) => setDates(date as Array<Date>)}
            timeSelectEnd
            range
            mask="9999/99/99"
            displayValueAtRangeIndex={1}
            placeholder="End Date"
          />
        </FormControl>
      </div>

      <div
        className={css({
          width: '120px',
        })}
      >
        <FormControl label="End Time" caption="HH:MM">
          <TimePicker
            value={dates[1]}
            onChange={time => setDates([dates[0], time])}
          />
        </FormControl>
      </div>
    </div>
  );
};
