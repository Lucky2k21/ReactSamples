* page1
https://ajshop.onrender.com/
# List of category
    >http://localhost:9500/category
    https://ajshop.onrender.com/category

# List of products
    >http://localhost:9500/products

* page2

# List of products wrt category
    >http://localhost:9500/product?categoryId=2

# Filter products wrt category
    >http://localhost:9500/filters/1?categoryId=1

* page3

# Details of products
    >http://localhost:9500/details/2

* page4

# Place order(post)
    >localhost:9500/placeOrder

* page5

# List of all orders(get)
    >localhost:9500/viewOrder

    {
        "_id": "63bf3e34b6ae8ec778d57c72",
        "orderId": 2,
        "name": "lakshmi",
        "email": "l@a.com",
        "cost": 100,
        "product": "face wash"
    }

# List of all orders wrt email
    >localhost:9500/viewOrder?email=k@a.com

# Update order(put)
    >localhost:9500/updateOrder/2

# Delete order
    >localhost:9500/deleteOrder/63bf3f8db70218b84cbd6673

# add category
    >localhost:9500/addCategory

# delete category
    >localhost:9500/deleteCategory/9

# add product
    >localhost:9500/addProduct

# delete product
    >localhost:9500/deleteProduct/31

# Update product
    >localhost:9500/updateProduct/31

>mongodb+srv://test:test123@cluster0.hpg6u3o.mongodb.net/?retryWrites=true&w=majority