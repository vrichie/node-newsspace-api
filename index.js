const express=require('express');
const path=require('path');
const app=express();
const cors=require('cors')
const port=process.env.PORT || 5001;


//handling json and form data
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//serving 
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/category',require('./routes/api/category'));
app.use('/api/article',require('./routes/api/article'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/search',require('./routes/api/search'));
app.use('/api/delete',require('./routes/api/delete'));
app.use('/api/editor',require('./routes/api/editor'));



app.listen(port,()=>{
    console.log(`server is running at port :${port}`)
})