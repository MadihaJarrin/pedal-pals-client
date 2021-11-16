import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Footer/Footer';
import Navigation from '../../../Home/Navigation/Navigation';

const ManageProducts = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [isDeletd, setIsDeleted] = useState(null)


    useEffect(() => {
        const url = `http://localhost:5000/allOrder`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [isDeletd]);

    //Detele Button
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
            <Navigation></Navigation>
            <h2>ALl Order </h2>
            <div>
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Your Name</th>
                            <th scope="col">Your Location</th>
                            <th scope="col">Package</th>
                            <th scope="col">Package Price</th>

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

export default ManageProducts;