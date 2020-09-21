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
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.listen(8000,function(){
    console.log('server is running')
})                                                                                        