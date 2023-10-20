import React from "react";

const OrderList = ({user, booking}) => {
    const renderOrder = ({user, booking}) => {
        console.log(booking)
        console.log(user)
        if(user && booking) {
            return (
                user && user.map(item => {
                return (
                <tr>
                    <td>{booking.orderId}</td>
                    <td>{item.userOrder.userInfo.userName}</td>
                    <td>{booking.orderDate ? booking.orderDate : null}</td>
                    <td className="row">{item.userOrder.orderData.map(product => {
                            return <td className="col-12 col-lg-3 mb-2 me-3 border-bottom"><b>{product.title}</b> - {product.quantity}</td>
                        })}
                    </td>
                    <td>{booking.bookingData.totalPrice}</td>
                    <td>{item.userOrder.status}</td>
                </tr>
                )
            })
            )
        }
    }

  return (
    <>
        {renderOrder({user, booking})}    
    </>

  );
};

export default OrderList;
