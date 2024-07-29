# 📦 ECOM-BACKEND - APIs Documentation

### 🌐 BASE URL      
[https://ecom-api-eujc.onrender.com](https://ecom-api-eujc.onrender.com) 

## 🧑‍💼 USER

*I have created the following functionalities: Login, Registration, Get Users, Reset Password, and Forget Password.*

**Note:** Make sure to pass the Authorization token in the header for accessing any API after registration and login. 

### Endpoints

| HTTP Method | End-Point | Body | Purpose of API |
|-------------|-----------|------|----------------|
| POST        | /api/v1/user/login | { "email": "abc@gmail.com", "password": "abc@password" } | Login |
| POST        | /api/v1/user/register | { "username": "Virendra Y", "email": "abc@gmail.com", "password": "abc@password", "role": "admin", "address": { "address": "123 Main St", "city": "Anytown", "state": "CA", "zip": "12345" } (optional) } | Register |
| POST        | /api/v1/user/address?userid=65f2cd7f070d1227665acbcf | { "address": "abc 134bbjf", "city": "bhadohi", "state": "chuari bazar", "pincode": "123455" } | Save Address |
| POST        | /api/v1/user/logout | NA | Logout |
| POST        | /api/v1/user/reset-password?userid=65f2cd | { "password": "asdfgh@password" } | Reset Password |
| GET         | /api/v1/user/getUserID | NA | User Details |

## 🛒 PRODUCT

*I have created the following functionalities: Create Products, Add Review, Like and Dislike, Get List of Products, and Get Product by ID.*

**Note:** Make sure to pass the Authorization token in the header for accessing any API after registration and login.

### Endpoints

| HTTP Method | End-Point | Body | Purpose of API |
|-------------|-----------|------|----------------|
| POST        | /api/v1/product | { "title": "Fjallraven - Foldsack No....", "description": "Fjallraven - Foldsack No....", "price": "123.23", "stock": "55", "brand": "Bag", "category": "Bags" } | Create Product |
| POST        | /api/v1/product/:productId/review | { "review": "abce is sskd" } | Add Review |
| GET         | /api/v1/products | NA | Get Product List |
| POST        | /api/v1/product/like/productID | NA | Like & Dislike |
| GET         | /api/v1/product-by-id?productID=65f1 | NA | Product By ID |

## 🛍️ CART

*I have created the following functionalities: Create Cart and Get List of Cart.*

**Note:** Make sure to pass the Authorization token in the header for accessing any API after registration and login.

### Endpoints

| HTTP Method | End-Point | Body | Purpose of API |
|-------------|-----------|------|----------------|
| POST        | /api/v1/cart/ | { "products": [ { "productID": "65f1108dfab04dd683e39ea7", "quantity": 2, "color": "Redaish Black" } ] } | Create Cart |
| GET         | /api/v1/cart/ | NA | Get Cart |

## 🎟️ COUPON

*I have created the following functionalities: Create Coupon and Get List of Coupon.*

**Note:** Make sure to pass the Authorization token in the header for accessing any API after registration and login.

### Endpoints

| HTTP Method | End-Point | Body | Purpose of API |
|-------------|-----------|------|----------------|
| POST        | /api/v1/coopan/ | { "couponCode": "HOLI23", "discountPercentage": 25, "maxDiscountInRs": 250, "startDate": "2024-03-15", "endDate": "2024-05-15", "isActive": true } | Create Coupon |
| GET         | /api/v1/coopan/ | NA | Get Coupon |

## 📦 ORDER

*I have created the following functionalities: Create Order and Get List of Order.*

**Note:** Make sure to pass the Authorization token in the header for accessing any API after registration and login.

### Endpoints

| HTTP Method | End-Point | Body | Purpose of API |
|-------------|-----------|------|----------------|
| POST        | /api/v1/order/?userID=65ecab | { "coupan": "HOLI24", "deliveryAddress": { "address": "abc 134bbjf", "city": "bhadohi", "state": "chuari bazar", "pincode": "123455" }, "modeOfPayment": "ONLINE" } | Create Order |
| GET         | /api/v1/order/ | NA | Get Order |

---

Feel free to explore the endpoints and integrate them into your application! 🚀
