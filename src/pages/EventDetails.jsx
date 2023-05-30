import { useParams } from "react-router-dom";
import data from "../../assets/data";
import { useState } from "react";

const EventDetails = () => {
    const { id } = useParams();
    const event = data.allEvents.find(item => item.id === id);
    const [error, setError] = useState('')
    const [seatNo, setSeatNo] = useState('')
    const [seatPrice, setSeatPrice] = useState(0)
    const [selectedSeat, setSelectedSeat] = useState([])
    const selectSeat = (seat) => {
        if (selectedSeat.length >= 4) {
            return setError("You can select maximum 4 seat in one time.")
        }

        if (selectedSeat.includes(seat.seatNo)) {
            return setError(`You already choose ${seat.seatNo}`)
        }
        else {
            selectedSeat.push(seat.seatNo);
            setSeatNo(selectedSeat.join());
            setError('')
            setSeatPrice(seatPrice + seat.price)
            console.log(seatPrice * 5 / 100);
        }
    }
    const clearSeat = () => {
        setSelectedSeat([]);
        setError('')
        setSeatNo('');
        setSeatPrice(0);
    }
    return (
        <>
            <div className="eventDetails">
                <h1>{event.title}</h1>
                <p>Artist: {event.artist || event.athlete}</p>
                <p>Event Type: {event.eventType}</p>
                <p>Event location: {event.location}</p>
                <p>Date: {event.date}</p>
            </div>
            <div className="allSeats">
                <h3>Available seat</h3>
                <div className="allSeats__plan">
                    {data.seat.map(individualSeat => <p
                        key={individualSeat.seatNo}
                        className="allSeats__plan--seat"
                        onClick={() => selectSeat(individualSeat)}
                    >{individualSeat.seatNo}
                    </p>)}
                </div>
                <p className="allSeats__request">Please choose any seat as you want</p>
                <p className="allSeats__error">{error}</p>
            </div>
            <div className="purchase">
                <div className="purchase__description">
                    <p className="label">Seat no:</p>
                    <input type="text" value={seatNo} readOnly />
                    {
                        seatNo && <button onClick={clearSeat}>clear</button>

                    }
                </div>
                <div className="purchase__description">
                    <p className="label">Seat fair:</p>
                    <input type="text" value={seatPrice} readOnly />
                </div>
                <div className="purchase__description">
                    <p className="label">Tax (5%):</p>
                    <input type="text" value={seatPrice * 5 / 100} readOnly />
                </div>
                <div className="purchase__description">
                    <p className="label">Total:</p>
                    <input type="text" value={seatPrice + seatPrice * 5 / 100} readOnly />
                </div>
            </div>
        </>


    );
};

export default EventDetails;