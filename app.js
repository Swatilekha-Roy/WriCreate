const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var path = require('path');
const mongoose=require('mongoose');

// mongoose.connect("mongodb://localhost:27017/likeDB" , {useNewUrlParser : true, useUnifiedTopology: true } );
mongoose.connect("mongodb+srv://chehak:123@cluster0.ohkb1.mongodb.net/commentDB" , {useNewUrlParser : true, useUnifiedTopology: true } );

let port = process.env.PORT || 3000

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

const likeSchema = new mongoose.Schema({
  // title:String,
  count : Number 
});

const Like=mongoose.model("Like",likeSchema);

const like=new Like({
count:0
});



const commentSchema = new mongoose.Schema({
  // title:String,
  title:String,
  post:String 
});

const Comment=mongoose.model("Comment",commentSchema);

// const like=new Like({
// count:0
// });

// Like.find({},function(err,founditems){
//    res.render("likes",{count:founditems});
// });

// like.save();

// app.use(express.static("public"));

app.get("/",function(req,res){
   res.render("index");
});

// Like.updateOne({_id:"607121e391d45f3178a44f3d"},{count:3},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("updated");
//   }
// }); 

app.get("/story",function(req,res){
  Comment.find({}, function(err, comments){
    res.render("story", {
      // startingContent: homeStartingContent,
      comments: comments
      });
  });
});


app.post("/story",function(req,res){
  // Like.find({},function(err,founditems){
  //   console.log(founditems[0].count);
  //   res.render("story",{count:founditems[0].count, });
  // });

  const comment = new Comment ({
    title: req.body.postTitle,
    post: req.body.postBody
  });

  comment.save();
  // res.render("story",{count:count});
});


app.listen(port,function(){
  console.log("running on 3000");
});
