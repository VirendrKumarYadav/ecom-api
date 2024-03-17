
const createCart = async (req, res) => {
    try {
        res.json({
            sucess: true,
            massage: "create cart !"
        })

    } catch (err) {
        res.json({
            sucess: false,
            massage: err
        })

    }

}
const getCart = async (req, res) => {
    try {
        res.json({   
            sucess: true,
            massage: "get cart"
        })

    } catch (err) {
        res.json({
            sucess: false,
            massage: err
        })

    }

}


const cartController = {
    getCart,
    createCart
}


module.exports = cartController