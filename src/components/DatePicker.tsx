import React from 'react';
import '../App.css';
import { Calendar } from './Calendar';

export const DatePicker: React.FC<{}> = ({ }) => {
    return (
        <div className="flex justify-center">
            < Calendar />
        </div>
    )
}