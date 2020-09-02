const express = require('express');
const app = express();

//middleware
const mockUserData=[{name:'Madhav'},{name:'Nair'}]
app.get('/users',function(req,res){
    res.json({
        success:true,
        message:'successfull acquired users...',
        users:mockUserData
    })
})

app.listen(8000,function(){
    console.log('server is running')
})