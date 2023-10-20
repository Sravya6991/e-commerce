const db = require('../database');

const products = async (req, res) => {
    const result = await db.getDb().collection('products').find({}).toArray();
    res.send(result);
}

const oneProduct = async (req, res) => {
    const product_id = Number(req.params.id);
    const result = await db.getDb().collection('products').findOne({id: product_id});
    res.send(result)
}

const category = async (req, res) => {
    const id = req.params.id;
    const result =  await db.getDb().collection(`${id}`).find({}).toArray();
    res.send(result)
}


// post particular cart data
const cartData = (req, res) => {
    if(Array.isArray(req.body)) {
        db.getDb().collection('products').find({id: {$in: req.body}}).toArray((err, result) => {
            if(err) console.log(err);
            res.send(result)
        });
    } else {
        console.log('invalid')
    }
}

// post and get place order
const placeOrder = async (req, res) => {
    const info = req.body;
    await db.getDb().collection('orders').insertOne(info, (err, result) => {
        if(err) res.send(err);
        res.send("Order is placed");
    });
}

// booking order
const booking = async (req, res) => {
    let enteredAcctNumber = String(req.body.acctnumber);
    let enteredExpiry = String(req.body.expiry);
    let enteredCvv = String(req.body.cvv);
    let enteredBank = req.body.bankname;
    let query = req.body;
    
    if(!enteredAcctNumber == '4242 4242 4242 4242 4242' ||
        !enteredExpiry == '12/25' ||
        !enteredCvv == '456' ||
        enteredBank == ''
    ) {
        res.send("Not a valid bank account | expiry | cvv");
    }

    await db.getDb().collection('bank').insertOne(query, async (err, result)=> {
            await db.getDb().collection('bank').findOne({_id: result.insertedId}, (err, result) => {
                if(err) res.send(err)
               res.send(result);
            })

    });

}
// get all orders
const orders = async (req, res) => {
    await db.getDb().collection('orders').find({}).toArray((err, result) => {
        if(err) res.send(err);
        res.send(result);
    });
}

// get orders wrt to email
const order = async (req, res) => {
    const emailId = req.query.email;
    if(emailId) {
        await db.getDb().collection('orders').findOne({"userOrder.userInfo.email": emailId}, (err, result) => {
            if(err) res.send(err);
            res.send(result);
        })
    }
}


module.exports = {
    products: products,
    oneProduct: oneProduct,
    cartData: cartData, 
    category: category,
    placeOrder: placeOrder,
    orders: orders,
    order: order,
    booking: booking,
}