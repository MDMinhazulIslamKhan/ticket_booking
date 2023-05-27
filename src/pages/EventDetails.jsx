import { useParams } from "react-router-dom";
import data from "../../assets/data";

const EventDetails = () => {
    const { id } = useParams();
    const event = data.allEvents.find(item => item.id === id);
    return (
        <div className="eventDetails">
            <h1>{event.title}</h1>
            <p>Artist: {event.artist || event.athlete}</p>
            <p>Event Type: {event.eventType}</p>
            <p>Event location: {event.location}</p>
            <p>Date: {event.date}</p>
        </div>
    );
};

export default EventDetails;