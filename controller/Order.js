
const OrderModal = require("../modal/order")
const CartModal = require("../modal/cart")
const CoopanModal = require("../modal/coopan")
const dayjs = require("dayjs")


const createOrder = async (req, res) => {

    try {
        //   step -1 userCart
        const userCart = await CartModal.find({ userID: req.params.userID })
        if (!userCart) {
            res.status(404).json({
                sucess: false,
                massage: "User Cart is Emplty, Please add atleast one item to the cart!"
            })
        }
        console.log(userCart);
        
        const coupon = await CoopanModal.findOne({ couponCode: req.body.coupan, isActive: true })
        // step-2 validation of coupan
        if (!coupon) {
            res.status(404).json({
                sucess: false,
                massage: "Invalid Coupan Code"
            })
        }
        const coupanStartDate = dayjs(coupon.startDate);
        const coupanEndDate = dayjs(coupon.endDate)
        const coupanCrtDate = dayjs();

        if (
            coupanCrtDate.isBefore(coupanStartDate) ||
            coupanEndDate.isAfter(coupanEndDate)
        ) {
            res.status(404).json({
                sucess: false,
                massage: " Coupan Code has expired!"
            })
        }

        // step-3 discount coupan
        const discount = ((userCart.cartTotal / 100) * coupon.discountPercentage).toFixed(2);
        console.log(discount);

        if (discount > coupon.maxDiscountInRs) {
            discount = coupon.maxDiscountInRs;
        }

        const amount = (userCart.cartTotal - discount).toFixed(2);
        // 

        // delivery address 

        let deliveryAddress = req.body.deliveryAddress;
        if (!deliveryAddress) {
            deliveryAddress = req.user.address;
        }
        const deliveryDate = dayjs().add(7, "day");



        const orderDetails = {
            cart: userCart,
            userId: req.params.userID,
            amount,
            coupon: coupon._id,
            deliveryAddress,
            orderPlacedAt: coupanCrtDate,
            deliveryDate,
            orderStatus: "PALCED",
            modeOfPayment: req.body.modeOfPayment,
        };

        // strp -6 create order 
        const newOrder = await OrderModal.create(orderDetails);
        let pgResponse;
        if (req.body.modeOfPayment === "COD") {
            res.json({
                sucess: true,
                massage: " Order Placed by COD!"
            })
        } else {
            //   the user to payment gateway able to Pay 
           
            const options = {
                amount: amount * 100,
                currency: "INR",
                receipt: newOrder._id, 
                payment_capture: 1, 
            };
            console.log("OPITONS", options);
            try {
                pgResponse = await razorpay.orders.create(options);
                console.log("RAZORPAY pgResponse", pgResponse);
            } catch (err) {
                console.log(err);
            }
        }

        res.json({
            success: true,
            message: "Order placed successfully",
            orderId: newOrder._id,
            paymentInformation: {
                amount: pgResponse.amount_due,
                orderId: pgResponse.id,
                currency: pgResponse.currency,
            },
        });


    } catch (error) {

        res.status(404).json({
            sucess: false,
            massage: "" + error
        })
    }
}
const getOrder = async (req, res) => {

    try {

        res.json({
            sucess: true,
            massage: "get Placed Order "
        })
    } catch (error) {

        res.status(404).json({
            sucess: false,
            massage: "Unable to get placed Order!"
        })


    }


}
module.exports = {
    createOrder,
    getOrder
}