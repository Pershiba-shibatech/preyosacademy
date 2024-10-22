import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { TimePicker } from 'antd';
import styles from './timepickerComp.module.scss'
const TimepickerComp = ({ selectedDate,onChangeFun,day }) => {


  return (
    //   <Form.Select aria-label="Default select example">

    //   <option value="01:00 - 02:00">01:00 - 02:00</option>
    //   <option value="02:00 - 03:00">02:00 - 03:00</option>
    //   <option value="03:00 - 04:00">03:00 - 04:00</option>
    //   <option value="04:00 - 05:00">04:00 - 05:00</option>
    //   <option value="05:00 - 06:00">05:00 - 06:00</option>
    //   <option value="06:00 - 07:00">06:00 - 07:00</option>
    //   <option value="7">07:00 - 08:00</option>
    //   <option value="8">08:00 - 09:00</option>
    //   <option value="7">09:00 - 10:00</option>
    //   <option value="1">10:00 - 11:00</option>
    //   <option value="1">11:00 - 12:00</option>
    //   <option value="1">12:00 - 13:00</option>
    //   <option value="1">13:00 - 14:00</option>
    //   <option value="1">14:00 - 15:00</option>
    //   <option value="1">15:00 - 16:00</option>
    //   <option value="1">16:00 - 17:00</option>
    //   <option value="1">17:00 - 18:00</option>
    //   <option value="1">18:00 - 19:00</option>
    //   <option value="1">19:00 - 20:00</option>
    //   <option value="1">20:00 - 21:00</option>
    //   <option value="1">21:00 - 22:00</option>
    //   <option value="1">22:00 - 23:00</option>
    //   <option value="1">23:00 - 24:00</option>
    //   <option value="1">24:00 - 01:00</option>

    // </Form.Select>

    <TimePicker.RangePicker format='HH:mm' minuteStep={30} className={styles.timePicker} onChange={(e)=>onChangeFun(e,day)}/>

  );
}

export default TimepickerComp
