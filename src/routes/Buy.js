import { Link, useLocation } from "react-router-dom";
import Item from "../components/Item";
const Buy = (props) => {
    const location = useLocation();
    const data = location.state;
    return (
        <>
            {
                data.data.map((el) => {
                    return (
                        <Item
                            key={el.id} item={el}
                        />
                    );
                })
            }
        </>
    );
};

export default Buy