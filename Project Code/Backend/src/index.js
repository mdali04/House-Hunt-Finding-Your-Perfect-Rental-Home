const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Rental = require('./Controller/Rental');
const Customer = require('./Controller/Customer');
const Admin = require('./Controller/Admin');
const path = require('path');
const cookieParser = require('cookie-parser');


const app = express()



//require('express');
dotenv.config();




app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use(cookieParser());



const server = async() =>{
    try{
        const db = await mongoose.connect('mongodb://localhost:27017/house',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        if(db){
            console.log('Database connected');
        app.listen(process.env.PORT || 5000 , () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        }   );
        }else{
            console.log('Database not connected');
        }

    }catch(error){
        console.log('Error in server:', error);
        process.exit(1);
    }
};


app.get('/h',(req,res)=>{
    res.send('Hello World');
});

app.use('/api/rental',Rental);
app.use('/api/customer',Customer);
app.use('/api/admin',Admin);

server();

