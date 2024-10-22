// import moment from 'moment';
import moment from 'moment-timezone';



export const setTimestamps = (sessions,type) => {
    console.log(type,"type")
    return sessions.map(session => {
        const { date, from, to } = session.sessionBookingDetails;
        const timeZone = type === "Student" ? session.StudentDetails.timeZone : session.tutorDetails.timeZone;
        const defaultTimeZone = 'Asia/Kolkata'
       
        const DefaultfromDateTime = moment(`${date} ${from}`).tz(defaultTimeZone).format('x');
        const DefaulttoDateTime = moment(`${date} ${to}`).tz(defaultTimeZone).format('x');
        const localDate = moment(Number(DefaultfromDateTime)).tz(timeZone).format('DD/MM/YYYY');
        const fromlocalTimeStamp = moment(Number(DefaultfromDateTime)).tz(timeZone).format('x');
        const fromDateTime = moment(Number(fromlocalTimeStamp)).tz(timeZone).format('HH:mm');
        const tolocalTimeStamp = moment(Number(DefaulttoDateTime)).tz(timeZone).format('x');
        const toDateTime = moment(Number(tolocalTimeStamp)).tz(timeZone).format('HH:mm');

        console.log(localDate, fromDateTime, toDateTime, fromlocalTimeStamp, tolocalTimeStamp)
        session.sessionBookingDetails.localDate = localDate
        session.sessionBookingDetails.fromLocalTime = fromDateTime;
        session.sessionBookingDetails.toLocalTime = toDateTime;
        session.sessionBookingDetails.fromLocalTimeStamp = fromlocalTimeStamp;
        session.sessionBookingDetails.toLocalTimeStamp = tolocalTimeStamp;

        return session;
    });
};


