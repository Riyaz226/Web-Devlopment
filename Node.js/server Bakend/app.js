//express module import

const express= require('express')

//needed varaibles initialze
const app= express()
const port=3000


app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/',(req,res)=>{
   res.render('pages/home')
})

app.get('/covid',(req,res)=>{
    const stats =[
        {state:'Tamilnadu', confirmed:'26,56,139' ,active:'5,37,750'},
        {state:'Kerala', confirmed:'24,49,129' ,active:'10,37,760'},
        {state:'Srilaka', confirmed:'12,49,439' ,active:'8,37,340'},
        {state:'Telghkana', confirmed:'44,49,129' ,active:'15,135,60'},
    ]

     const total ='7,92,234'
    
     res.render('pages/covid',{
        total:total,
        stats:stats,
    })
})

app.get('/reopen',(req,res)=>{
    res.render('pages/reopen')
 })

 app.get('/end',(req,res)=>{
    res.render('pages/end')
 }) 
app.listen(port, ()=>{
    console.log(`app is listening at port ${port}`)
})