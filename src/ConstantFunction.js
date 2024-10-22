import moment from 'moment';

export const getWeekdaysInMonth = (selectedDay, fromTime, toTime, excludeFirst = false) => {

    let year = moment().format('YYYY');
    let month = moment().format('MM') - 1;
    console.log(year, month, selectedDay, fromTime, toTime, excludeFirst, "year, month, selectedDay, fromTime, toTime, excludeFirst");
    const weekdays = [];
    const dayMap = {
        "Sunday": 0,
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6
    };

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const selectedDayIndex = dayMap[selectedDay];


    const startDate = moment([year, month]);
    const timestamp = startDate.valueOf();
    console.log("Timestamp:", timestamp);
    console.log("Formatted Date:", startDate.format('YYYY-MM-DD HH:mm:ss'));

    const daysInMonth = startDate.daysInMonth();
    console.log(daysInMonth, "daysInMonth")

    for (let day = 1; day <= daysInMonth; day++) {
        const date = moment([year, month, day]);

        if (date.day() === selectedDayIndex) {
            const dayName = dayNames[date.day()];

            if (date.format('YYYY-MM-DD') > moment().format('YYYY-MM-DD')) {
                weekdays.push({
                    from: fromTime,
                    to: toTime,
                    date: date.format('YYYY-MM-DD'),
                    timeStamp: date.format('x'),
                    dayName: dayName
                });
            }

        }
    }

    return weekdays;
};


export const getStatusOfSession = (status) => {
console.log(status)
    return status === 'Yettojoin' ? "Yet To Join" :
        status === 'rescheduled' ? "Re-scheduled" :
            status === 'completed' ? 'Completed' : "Cancelled";

}
