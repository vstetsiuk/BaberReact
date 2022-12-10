import Parse from 'parse/dist/parse.min.js';

export default function BookingForm() {
    function clickHandler() {
        console.log('submit');
        const location = localStorage.getItem('location');
        const booking = new Parse.Object('Booking');
        booking.set('location', location);
        booking.save();
    }
    return (
        <button onClick={clickHandler}>Записатися</button>
    );
}