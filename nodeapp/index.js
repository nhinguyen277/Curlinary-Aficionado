const express = require("express");
//const path = require("path");
const cors = require("cors"); //need this to set this API to allow requests from other servers
const { MongoClient , ObjectId} = require("mongodb");

const app = express();
const port = process.env.PORT || "3000";

const dbUrl = `mongodb+srv://admin:Admin123@cluster0.yqdhq9a.mongodb.net/curlinary`;
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request

//allow requests from all servers
app.use(cors({
  origin: "*"
}));

//API endpoints

/*
 * returns: an array of recipes list
 */
app.get("/api/recipes", async (request, response) => {
  let recipes = await getRecipes();
  response.json(recipes); //send JSON object with appropriate JSON headers
});

/*
 * returns: an a recipe detail
 */
app.get("/api/details/:id", async (request, response) => {
    let recipeId = request.params.id;
    let recipe = await getDetailRecipe(recipeId);
    response.json(recipe); //send JSON object with appropriate JSON headers
  });
  

/*
 * returns: an array of lastest posts
 */
app.get("/api/lastest", async (request, response) => {
    let lastest = await getLatests();
    response.json(lastest); //send JSON object with appropriate JSON headers
  });

/*
 * returns: an array of all posts
 */
app.get("/api/posts", async (request, response) => {
    let posts = await getPosts();
    response.json(posts); //send JSON object with appropriate JSON headers
  });

/*
 * returns: an a post detail
 */
app.get("/api/post/:id", async (request, response) => {
    let postId = request.params.id;
    let post = await getPostDetail(postId);
    response.json(post); //send JSON object with appropriate JSON headers
  });
  

  
//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


//MongoDB functions
async function connection() {
  await client.connect();
  db = client.db("curlinary"); //select curlinary database
  return db;
}
/* Async function to retrieve all recipes documents from recpipes collection. */
async function getRecipes() {
  db = await connection(); //await result of connection() and store the returned db
  var results = db.collection("recipes").find({}); //{} as the query means no filter, so select all
  res = await results.toArray();
  return res;
}

/* Async function to retrieve id of  a recipe from recpipes collection. */
async function getDetailRecipe(id) {
    db = await connection(); //await result of connection() and store the returned db
    const reid = new ObjectId(id);
    const result = db.collection("recipes").findOne({_id:reid});
    return result;
  }


  /* Async function to retrieve all posts documents from posts collection. */
async function getPosts() {
    db = await connection(); //await result of connection() and store the returned db
    var results = db.collection("posts").find({}); //{} as the query means no filter, so select all
    res = await results.toArray();
    return res;
  }

  /* Async function to retrieve id of  a recipe from recpipes collection. */
async function getPostDetail(id) {
    db = await connection(); //await result of connection() and store the returned db
    const postid = new ObjectId(id);
    const result = db.collection("posts").findOne({_id:postid});
    return result;
  }
/* Async function to retrieve all posts documents > 2024-03-18 from posts collection. */
async function getLatests() {
    db = await connection(); //await result of connection() and store the returned db
    var results = db.collection("posts").find({posted_at:{$gt:"2024-03-18"}}); //{} as the query means filter
    res = await results.toArray();
    return res;
  }


