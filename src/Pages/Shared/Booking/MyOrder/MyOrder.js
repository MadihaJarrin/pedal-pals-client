import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Footer from '../../../Footer/Footer';
import Navigation from '../../../Home/Navigation/Navigation';
import './MyOrder.css'

const MyOrder = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([]);
    const [isDeletd, setIsDeleted] = useState(null)

    const email = user.email;
    // console.log(email);
    useEffect(() => {
        fetch(`https://vast-hollows-68559.herokuapp.com/myOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [isDeletd]);

    const handleDelte = (id) => {
        fetch(`https://vast-hollows-68559.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    setIsDeleted(true);
                    alert("Are you Sure You want to Cancel this Bookig");

                } else {
                    setIsDeleted(false);
                }
            })
        console.log(id)
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="myorder">
                <h2>You have placed: {order.length} Orders</h2>

                <table class="table table-danger table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Your Name</th>
                            <th scope="col">Your Location</th>
                            <th scope="col">Package</th>
                            <th scope="col">Package Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>
                    <tbody >
                        {order.map((order) => (
                            <tr key={order._id}>
                                <td></td>
                                <td>{order.name}</td>
                                <td>{order.address}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.servicePrice}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pending
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Pending</a></li>
                                            <li><a class="dropdown-item" href="#">Approved</a></li>
                                            <li><a class="dropdown-item" href="#">Delevered</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td>
                                    <Button onClick={() => handleDelte(order._id)} className="btn btn-danger">
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <br />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrder;