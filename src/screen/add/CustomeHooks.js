import {useState} from 'react';

const CustomHooks = (tgl = new Date()) => {
    const [date, setDate] = useState(tgl);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

      return [ date, mode, show, onChange, showDatepicker, showTimepicker, setDate]
}

export default CustomHooks