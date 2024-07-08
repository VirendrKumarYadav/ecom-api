# ECOM-BACKEND -APIS

### Host Link      
<a href="https://ecom-api-eujc.onrender.com">https://ecom-api-eujc.onrender.com</a> 

## USER

-- I have created the Login,Registration,get users,Reset password and forget password.
-- Please Make sure you have to pass Autherization token in header for accessing any api after Register and login 

### End-Points
     HTTP Method       End-Point             Body                               Purpose of API
     
1.     POST         /api/v1/user/login       {
                                              "email":"abc@gmail.com",             --Login
                                                "password":"abc@password"
                                            }
2.     POST         /api/v1/user/register       {
                                            "username": "Virendra Y",
                                              "email":"abc@gmail.com",             --Register
                                               "password":"abc@password",
                                                 "role": "admin",
                                                 "address": 
                                                          {
                                                           "address": "123 Main St",
                                                            "city": "Anytown",
                                                             "state": "CA",
                                                             "zip": "12345"
                                                           }(optional)
                                            }
   
3.     POST         /api/v1/user/address?userid=65f2cd7f070d1227665acbcf  {                                   --Save Address    
                                                                         "address":"abc 134bbjf",
                                                                         "city":"bhadohi",
                                                                          "state":"chuari bazar",
                                                                         "pincode":"123455"
                                                                           }
   
5.     POST          /api/v1/user/logout                                       NA                            -- Logout

6.     POST         /api/v1/user/reset-password?userid=65f2cd       {                                        --Reset Password
                                                                     "password":"asdfgh@password"        
                                                                        }

7.     GET        /api/v1/user/getUserID                                NA                                   --User details




   ## Products

   -- I have created the Create Products,Add Review,Like and dislike,get list of products and get product by ID.
   -- Please Make sure you have to pass Autherization token in header for accessing any api after Register and login 

### End-Points
     HTTP Method       End-Point             Body                                               Purpose of API
     
1.     POST         /api/v1/product      {                                                      --Create Product
                                               "title":"Fjallraven - Foldsack No....",
                                               "description":"Fjallraven - Foldsack No....",
                                                "price":"123.23",
                                                "stock":"55",
                                                  "brand":"Bag",
                                                  "category":"Bags"
                                                   }             
                                           
2.     POST         /api/v1/product/:productId/review      {                                      -- Add Review
                                                            "review":"abce is sskd"
                                                             }                   
                                              
   
4.     GET          /api/v1/products                            NA                                 --Get Product List    
                                                                       
   

5.     POST        /api/v1/product/like/productID                 NA                                --Like & Dislike 
                                                                   

6.     GET         /api/v1/product-by-id?productID=65f1               NA                             --Product By ID

