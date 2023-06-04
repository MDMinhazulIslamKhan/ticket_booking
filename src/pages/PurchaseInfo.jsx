import { useLocation } from "react-router-dom";
import data from "../../assets/data";

const PurchaseInfo = () => {

    const purchase=(e)=>{
        console.log(e);
    }

    const {state} = useLocation();
    console.log(state);
    return (
         <form className="purchase">
            <h1></h1>
         <div className="purchase__description">
            <p className="label">Name:</p>
            <input type="text" value={data?.userInfo?.name} readOnly />
        </div>
        <div className="purchase__description">
            <p className="label">Phon:</p>
            <input type="text" name="phone" required />
        </div>
        <div className="purchase__description">
            <p className="label">Email:</p>
            <input type="text" value={data?.userInfo?.email}  readOnly/>
        </div>
        <div className="purchase__description">
            <p className="label">Event:</p>
            <input type="text" value={state?.event}  readOnly/>
        </div>
        <div className="purchase__description">
            <p className="label">Location:</p>
            <input type="text" value={state?.location}  readOnly/>
        </div>
        <div className="purchase__description">
            <p className="label">Date:</p>
            <input type="text" value={state?.date}  readOnly/>
        </div>
        <div className="purchase__description">
            <p className="label">Seat no:</p>
            <input type="text" value={state?.seatNo}  readOnly/>
        </div>
        <div className="purchase__description">
            <p className="label">Seat price:</p>
            <input type="text" value={state?.seatPrice} readOnly/>
        </div>
        <div className="purchase__description">
            <p className="label">Total:</p>
            <input type="text" value={state?.totalPrice}  readOnly/>
        </div>
        <div className="purchase__description">
            <div className="label">
             <p>Payment method</p>
            </div>
            <select>
                <option value="debit cards">Credit cards</option>
                <option value="debit cards">Debit cards</option>
                <option value="PayPal">PayPal</option>
            </select>
        </div>
        <div className="purchase__description">
            <p className="label">Account no:</p>
            <input type="text" name="account" required />
        </div>
        <button className="purchase__submit" onClick={e=>purchase(e)} type="submit">Confirm Order</button>
    </form>
    );
};

export default PurchaseInfo;