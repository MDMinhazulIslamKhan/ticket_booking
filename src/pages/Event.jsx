import { useState } from "react";
import data from "../../assets/data";
import Events from "../components/Events";

const Event = () => {
    const [event, setEvent] = useState(data.allEvents)
    const selectEvent = (e) => {
        if (!e.target.value) {
            return setEvent(data.allEvents);
        }
        const matchData = data.allEvents.filter(match => match.eventType === e.target.value);
        setEvent(matchData);
    }
    return (
        <>
            <div className="content">
                <select onChange={(e) => selectEvent(e)} name="" id="" className="content__select">
                    <option disabled value="">Please select event from below</option>
                    <option value="">All events</option>
                    {data.allEventType.map(eve => <option value={eve} key={eve}>{eve}</option>)}
                </select>
            </div>
            <Events data={event} />
        </>
    );
};

export default Event;