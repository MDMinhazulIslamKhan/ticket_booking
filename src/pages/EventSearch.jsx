import data from "../../assets/data";
const EventSearch = () => {
    const selectEvent = (e) => {
        console.log(e.target.value);

    }
    console.log();
    return (
        <div className="event">
            <select onChange={(e) => selectEvent(e)} name="" id="" className="event__select">
                <option value="">Please Select from below</option>
                {data.allEvents.map(eve => <option value={eve.id} key={eve.id}>{eve.title}</option>)}
            </select>
        </div>
    );
};

export default EventSearch;