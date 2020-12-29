import React, {useState} from 'react';
import DatePicker from 'react-date-picker';

function DateSelect(){
    const [value, onChange] = useState(new Date());

    return(
        <div>
            <DatePicker
                format = "M-d-y" //(m/d/yyyy)
                onChange = {onChange}
                value = {value}
            />
        </div>
    )
}
export default DateSelect;