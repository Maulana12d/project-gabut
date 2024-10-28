const mongoose = require('mongoose')
const uri ="mongodb+srv://gajahpetir7:gajahpetir@cluster0.pv0wj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/gabut";


mongoose.connect(uri,{
    userNewUrlParser: true,
    userUnifiedTopology:true,
    useCreateIndex:true,
});