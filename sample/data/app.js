let express=require('express');
let app=express();
let port=9500;
let bodyParser=require('body-parser');
let cors=require('cors');
let mongo=require('mongodb');
let MongoClient=mongo.MongoClient;
let mongoUrl="mongodb+srv://test:test123@cluster0.hpg6u3o.mongodb.net/?retryWrites=true&w=majority";
let db;
app.use(express.json());

//middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send('<h1>welcome</h1>')
})

//List of category
app.get('/category',(req,res)=>{
    db.collection('category').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//List of products
app.get('/product',(req,res)=>{
    let categoryId = Number(req.query.categoryId)
    let query={}
    if(categoryId){
        query={category_id:categoryId}
    }
    db.collection('product').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//filter products wrt category

app.get('/filters/:categoryId',(req,res)=>{
    let query={};
    let categoryId=Number(req.query.categoryId);

    if(categoryId){
        query={
            "category_id":categoryId


        }
    }

    db.collection('product').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//Details of product
app.get('/details/:productId',(req,res)=>{
    let id=Number(req.params.productId)
    db.collection('product').find({product_id:id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//product user selected
app.post('product',(req,res)=>{
    if(Array.isArray(req.body.id)){
        db.collection('product').find({product_id:{$in:req.body.id}}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })

    }else{
        res.send('Invalid Input')
    }
})

//place order
app.post('/placeOrder',(req,res)=>{
    db.collection('order').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('order placed')
    })
})

//view Order
app.get('/viewOrder',(req,res)=>{
    let email=req.query.email;
    let query={};
    if(email){
        query={email:email}
    }else{
        query={}
    }
    db.collection('order').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//update order
app.put('/updateOrder/:id',(req,res)=>{
    let oid=Number(req.params.id);
    db.collection('order').updateOne({orderId:oid},
        {
           $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
             "date":req.body.date
            }
        },(err,result)=>{
            if(err) throw err;
            res.send('order updated')

    })
})
/*app.put('/updateOrder/:id',(req,res)=>{
    let oid=Number(req.body.oid)
    db.collection('order').findOneAndUpdate({"orderId":oid},{
        $set:{
            "status":req.body.status,
            "bank_name":req.body.bank_name,
         "date":req.body.date
        }
    },(err,result)=>{
        if(err) throw err;
        res.send('order updated')

    })
})*/

//delete order using mongo id
app.delete('/deleteOrder/:id',(req,res)=>{
    let _id=mongo.ObjectId(req.params.id);
    db.collection('order').remove({_id},(err,result)=>{
        if(err) throw err;
        res.send('Order deleted')
    })
})

//delete order using id
app.delete('/deleteOrder/:id',(req,res)=>{
    let oid=Number(req.params.id);
    db.collection('order').remove({
        id:oid
    },(err,result)=>{
        if(err) throw err;
        res.send('data deleted')

    })
})

//add category
app.post('/addCategory',(req,res)=>{
    db.collection('category').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('category added')
    })
})

//delete category
app.delete('/deleteCategory/:id',(req,res)=>{
    let cid=Number(req.params.id);
    db.collection('category').remove({
        id:cid
    },(err,result)=>{
        if(err) throw err;
        res.send('data deleted')

    })
})

//add product
app.post('/addProduct',(req,res)=>{
    db.collection('product').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('product added')
    })
})

//delete product
app.delete('/deleteProduct/:id',(req,res)=>{
    let pid=Number(req.params.id);
    db.collection('product').remove({
        product_id:pid
    },(err,result)=>{
        if(err) throw err;
        res.send('data deleted')

    })
})

//update product
app.put('/updateProduct/:id',(req,res)=>{
    let oid=Number(req.params.id);
    db.collection('product').updateOne({product_id:oid},
        {
           $set:{
                "product_name":req.body.product_name,

                "category":req.body.category,
             "category_id":req.body.category_id,
             "Price":req.body.Price,
             "Image":req.body.Image
            }
        },(err,result)=>{
            if(err) throw err;
            res.send('order updated')

    })
})

//connect to mongo
MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,dc)=>{
    if(err) console.log('error while connecting');
    db = dc.db('ajshop');
    app.listen(port,()=>{
        console.log(`server running on ${port}`)
    })
})

