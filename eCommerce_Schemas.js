const mongoose = require('mongoose')
const Schema =  mongoose.Schema;

//CART SCHEMA

let cartSchema = new Schema(
    {

        productID : {
        type : String,
        unique:true
        },
        productName : {
        type : String,
        default : ''
        },
        totalItemsInCart : {
        type: Number,
        default: 0
        },
        totalCartPrice : {
        type : Number,
        default : ''
        },
        deliveryCharges : {
        type : Number,
        default : ''
        },
        finalPayableAmount : {
        type : Number,
        default : ''
        },
        deliveryDate : {
        type : Date,
        default : Date.now
        }

    }
)


// PRODUCT SCHEMA

let productSchema = new Schema(
{

    productID : {
        type : String,
        unique : true
    },
    productName : {
        type : String,
        default : ''
    },
    category : {
        type : String,
        default : ''
    },
    price : {
        type : Number,
        default : ''
    },
    brand : {
        type : String,
        default : ''
    },
    isInStock : {
        type : Boolean,
        default : true
    },
    sizes: [],
    numberOfPiecesAvailable : {
        type : Number,
        default : ''
    },
    addedOn : {
        type : Date,
        default : Date.now
    },
    deliverablePincodes : {
    type : Number,
    default : ''
    },
    sellersAvailable : {
    type : Number,
    default : ''
    },
    deliveryDate : {
    type : Date,
    default : ''
    },
    specifications : {
    type : String,
    default : ''
    },
    ratings : {
    type : String,
    default : ''
    }
  }
)



// CUSTOMER SCHEMA

let customerSchema = new Schema(
{

    customerID : {
    type : Number,
    default : ''
    },
    customerName : {
    type : String,
    default : ''
    },
    address : {
    type : String,
    default : ''
    },
    gender : {
    type : String,
    default : ''
    },
    emailAddress : {
    type : String
    default : ''
    },
    phoneNumber : {
    type : Number
    default : ''
    }
 }
)




//PAYMENT SCHEMA

let paymentSchema = new Schema(
{

    orderID : {
    type : Number,
    default : ''
    },
    paymentModes : {
    type : String,
    default : ''
    },
    cashback : {
    type : String,
    default : ''
    },
    discount : {
    type : String,
    default : ''
    },
    cardSaved : {
    type : Boolean
    default : false
    },
    payableAmount : {
    type : Number
    default : ''
    },
    isRefundable : {
        type: Boolean,
        default: false
    }
 }
)


    
mongoose.model('Cart', cartSchema);
mongoose.model('Product', productSchema);
mongoose.model('Customer', customerSchema);
mongoose.model('Payment', paymentSchema);