import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Events = ({ data }) => {
    return (
        <div className="events">
            {data.map(d => <>
                <Link to={`/event/${d.id}`} className="event">
                    <h3 className="event__title">{d.title}</h3>
                    <p className="event__type">{d.eventType}</p>
                    <p className="event__type">{d.location}</p>
                </Link></>)}
        </div>
    );
};

export default Events;