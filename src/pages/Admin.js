import { useEffect, useState } from "react";
import './Admin.css';
import { useAuthContext } from '../hooks/useAuthContext';

function Admin(){

    const { user } = useAuthContext()

    const [orders,setOrders] = useState([])
    useEffect(() => {
       fetch("http://localhost:4000/api/orders/orders",{
        headers: {'Authorization': `Bearer ${user.token}`}
       })
       .then(res=> res.json())
       .then(res=> setOrders(res))

      },[user.token]);
    return(
        <div>
            <h2>Admin Panel</h2>
            <div>
                {orders.map(order => (
                    <div key={order._id} className="product-card">
                    <h2>{order.tutor}</h2>
                    <p>Time: {order.time}</p>
                    <p>Level: {order.level}</p>
                    <p>Phone: {order.phone}</p>
                    <p>Message: {order.message}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Admin;