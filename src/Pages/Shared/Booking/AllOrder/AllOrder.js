import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Footer/Footer';
import Navigation from '../../../Home/Navigation/Navigation';

const AllOrder = () => {

    const [allOrder, setAllOrder] = useState([]);
    const [isDeletd, setIsDeleted] = useState(null)


    useEffect(() => {
        const url = `https://vast-hollows-68559.herokuapp.com/allOrder`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [isDeletd]);

    //Detele Button
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
            <h2 style={{ textShadow: "3px 3px 2px green", color: "white", padding: "10px" }}>Manage All Orders </h2>
            <div>
                <table class="table table-info table-hover">
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
                        {allOrder.map((order) => (
                            <tr key={order._id}>
                                <td></td>
                                <td>{order.name}</td>
                                <td>{order.address}</td>
                                <td>{order.serviceName}</td>
                                <td>{order.servicePrice}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle btn-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pending
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item bg-success" href="#">Pending</a></li>
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


                {/* {
                    allOrders.map(allOrder => <AllOrderService
                        key={allOrder.id}
                        data={allOrder}
                    ></AllOrderService>)
                } */}

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllOrder;