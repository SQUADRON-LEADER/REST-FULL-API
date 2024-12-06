const express = require("express");
const app = express();
const port= 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4(); 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const post = posts.find(p => p.id === id);
    if (post) {
        post.content = content; // Update post content
        res.redirect('/posts');
    } else {
        res.status(404).send('Post not found');
    }
});


app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{

    res.send("serving working well!");
});
let posts= [
    {
        id:uuidv4(),
        username:"apna college",
        content:"i love coding"
    },
    {
        id:uuidv4(),
        username:"aayush kumar",
        content:"most talenetd student of the year"
    },
    {
        id:uuidv4(),
        username:"srm ist",
        content:"very good"
    },
    {
        id:uuidv4(),
        username:"aayush  ",
        content:"selected in amazon"
    }
];
app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
    let {username,content}= req.body;
    posts.push({username,content});
    res.redirect("/posts");
});
app.get("/posts/:id", (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id ===p.id);
    res.render("show.ejs",{post});
    
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post =posts.find((p)=> id === p.id);
    res.render("edit.ejs");
});
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.listen(port,()=>{
    console.log("the port is listening on port on 8080");
});