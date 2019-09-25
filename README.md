# [THEssentials](http://thessentials.club)

**Home Page**

![Home Page](https://media.giphy.com/media/Vi6nHqi5rWENEuLbRj/giphy.gif)

**Sign In**

![Sign In](https://media.giphy.com/media/Zd0ok2deO3BX8i3Qe2/giphy.gif)

**Sign Up**

![Sign Up](https://media.giphy.com/media/Y022Ycn4HHkrLSHX9F/giphy.gif)

**Shopping Experience** 

![User Shop](https://media.giphy.com/media/mCK5kt7vBL44h4NvUb/giphy.gif)

**Admin User Create**

![Admin Create](https://media.giphy.com/media/iI9oA24vUUJrLFpBaI/giphy.gif)

**Admin User Delete**

![Admin Delete](https://media.giphy.com/media/mBvhcDuznBG0TClsJA/giphy.gif)

**Admin User Update**

![Admin Update](https://media.giphy.com/media/VG2kKsE9wqVlj4PZti/giphy.gif)

## Summary

THEssentials, True Hermit Essentials, is an ecommerce site created for homebodies. Purchase all your stay at home necessities here. Come take a gander; don't be shy, you can do it from your home.

*There are two different types of controls, for now admin controls are kept for the creators only*
<br>1 - Admin controls: Create categories, view orders, create, manage, update, and delete products
<br>2 - User controls: Add to cart, purchase, search for products, and filter products by price category or price

## How it was created
### The Process
- Divided the work after wireframing the site
- Set up our backend using **MongoDB** as our database, **Express** as our server, and **Node** as our environment
- Initialized authentication by creating models and functions for sign up and sign in processes 
- **Morgan, cookie-parser, and express-JWT** were all used for authentication purposes
- Created models and functions for products and categories 
- Used **Postman** for testing all requests between users, products, and categories
- Depended on **CSS, Bootstrap, and React** to create and style the components on frontend
- Distinguished two separate dashboards; one for admins and one for regular users
- Created filtering, searching, and loading more functions
- Leveraged the cart by using **Local Storage** to store the user's cart, and adding a payment process using **Braintree**
- Orders were displayed both for the user and for the admin; where the admin can update the status of the order
- **Moment** was used to create times for when a product is posted or purchased
- Once everything was in order, the front end and back end were split and then deployed via **Digital Ocean**

### The Challenges
- Properly creating MongoDB schemas and utilizing them
- Testing and troubleshooting all requests via Postman and understanding the errors
- Getting front end and back end to coexist seamlessly proved to be difficult
- Ensuring the site was responsive across all devices 

### Technologies Used
- MERN stack (Mongodb/Mongoose, Express, React, Node/Nodemon) 
- Braintree (for payment proccessing Credit Cards/Paypal)
- CORS (middleware used to help enable CORS)
- Morgan (help with generating request logs)
- Cookie-parser (to help load old data for users who are visiting again)
- Local Storage (for user cart)
- Express-JWT (for authentication)
- Moment (calculate time product was posted)
- Digital Ocean (deployment)

### Future Implementations
- To make this completely live with products shipped to our customer base!
- ^ Only thing for sure thus far
