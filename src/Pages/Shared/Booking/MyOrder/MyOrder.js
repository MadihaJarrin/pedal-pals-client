import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([]);
    const [isDeletd, setIsDeleted] = useState(null)

    const email = user.email;
    // console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [isDeletd]);

    const handleDelte = (id) => {
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
            <h2>You have placed: {order.length} Orders</h2>

            <table class="table table-success table-hover">
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
    );
};

export default MyOrder;