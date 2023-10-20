###### Backend APIs ########
-------------------------------

- (GET) Get all products
----------------------

  http://localhost:4000/products


- (GET) Get products => id
------------------------

  http://localhost:4000/products/:id


- (GET) Get products => category => id
-------------------------------------

  http://localhost:4000/products/category/:id


- (POST) the cart order data  ('in the air')
----------------------------------

  http://localhost:4000/cartData -> in the air

      menuorder = {
          menu_name: item.title,
          image: item.image,
          title: item.title,
          price: item.price,
          qty: count,
      }


- (POST) placeorder   ('orders')
---------------------------

  After clicking placeorder button the above "air" data will be pushed onto collection ="orders"
  http://localhost:4000/products/placeOrder

      orders = [
          {
              orderData: { menuOrder },
              userInfo: { user },
              date: new Date().toLocaleDateString,
              staus: "pending",
          }
      ]

      navigate('booking')


- (POST) Payment of orders   ('Bank')
-----------------------------

    Enter valid bank details given in input field placeholder
    http://localhost:4000/booking <-> collection = "bank"

      bank = [
          {
              orderId: Math.ceil(Math.random(1,10)*1000),
              orderDate: new Date().toLocaleString(),
              bookingData: { booking }
          }
      ]

      submit button -> navigate to "orders.js"


- (GET) Show order items on table
------------------------------------

get collection = 'orders' & 'bank'/ using 'useLocation().state.booking' = booking'

    OrderId      ||   Username     ||   Booking date      ||       Products           ||    Total Price      ||    Status
'order.order_id'    'order.user'   'bank'='booking.date'   'order.oderInfo.prod.map()   'booking.totalPrice'    'order.status'


----------------------------------------------------------------------------------------------------------------------

###### Users #######

- (POST) register 
------------------

http://localhost:4000/signup


- (POST) Login
-----------------

http://localhost:4000/login <-> jwt.sign(id, secret, expiry)


- (GET) userInfo
------------------

http://localhost:4000/userInfo <-> jwt.verify(token_id, secret, ()=>{}) <-> token_id = req.headers['x-access-token']


