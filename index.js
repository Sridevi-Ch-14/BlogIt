const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const {v4: uuid} = require("uuid");
var methodOverride = require('method-override')


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,(req,res)=>{
    console.log("Listening on port")
});


let posts = [
    {
        id: uuid(),
        username: "Sridevi_Ch",
        content: "Web development gives me the creative freedom to build anything I imagine. From structuring content with HTML, styling with CSS, and adding interactivity with JavaScript — it's like digital artistry. Watching a design come to life in the browser is incredibly satisfying, and it keeps me motivated to explore more."
    },
    {
        id: uuid(),
        username: "Pranavi_Ch",
        content: "Mathematics and science have always been my favorite subjects because they help explain the world around us. Whether it's the logic behind algorithms or the physics behind a moving car, I love how everything connects. These subjects train your brain to solve problems efficiently."
    },
    {
        id: uuid(),
        username: "Meenakshi_Ch",
        content: "Astrology fascinates me. While it might not be everyone's cup of tea, I see it as a symbolic language of the universe. I enjoy exploring how celestial movements influence our moods and behavior — it's a blend of mythology, psychology, and cosmic rhythm."
    },
    {
        id: uuid(),
        username: "Rahul_T",
        content: "JavaScript is my entry into the programming world, and although I find it confusing at times, I love how powerful it is. With just a few lines of code, you can change how a page behaves. My first successful form validation felt like a personal victory!"
    },
    {
        id: uuid(),
        username: "Aisha_123",
        content: "Design isn’t just about making things look good — it’s about clarity, emotion, and storytelling. A good design should make people feel something and guide them without confusion. I love experimenting with colors and typefaces to create user-friendly interfaces."
    },
    {
        id: uuid(),
        username: "Vikram_R",
        content: "I use running as a way to de-stress and think clearly. Some of my best ideas for school projects or personal goals come when I’m out jogging with music. The rhythm of running helps me focus and sometimes even boosts my creativity."
    },
    {
        id: uuid(),
        username: "Neha_P",
        content: "Books are my ultimate comfort zone. Whether it's losing myself in a good mystery or getting swept up in a historical drama, reading allows me to live a thousand lives. I enjoy journaling what I read and sharing book reviews online too."
    },
    {
    id: uuid(),
    username: "Karan_Travels",
    content: "Street food is the soul of a city. I still dream about the pani puri I had at a small stall in Pune — tangy, spicy, crisp, and unforgettable. The best meals are not always from fancy restaurants, but from places that tell a story through every bite.",
    tag: "food"
},
    {
        id: uuid(),
        username: "Ishita_D",
        content: "Mental health is often overlooked, but it's as crucial as physical health. I've been trying mindfulness exercises, and they really help with anxiety. Taking 10 minutes a day to slow down, breathe, and reflect can make a huge difference."
    },
    {
        id: uuid(),
        username: "Harsha_V",
        content: "Learning Data Structures and Algorithms is tough but rewarding. Recursion especially blows my mind — it’s elegant, but also confusing when the call stack grows too deep. Watching it visually with tools like Trace Recursion helps me grasp the flow better."
    },
    {
        id: uuid(),
        username: "Yamini_B",
        content: "Photography has changed how I view the world. I notice shadows, lighting, and moments that others miss. Even with a phone camera, you can capture emotions and tell stories. Editing photos is equally fun — it’s where art meets tech."
    },
    {
        id: uuid(),
        username: "Kunal_Z",
        content: "User experience is more than just a buzzword — it defines how people interact with digital products. I enjoy reviewing websites and apps, noticing what works and what doesn't. Small changes in layout or feedback can drastically improve usability."
    },
    {
        id: uuid(),
        username: "Lavanya_S",
        content: "Learning React has been a game-changer. At first, the JSX syntax confused me, but now I appreciate how components and props keep code organized. I’m currently working on lifting state and handling forms, and I love how interactive my pages are becoming."
    },
    {
        id: uuid(),
        username: "Arjun_P",
        content: "Machine Learning is like opening a door to the future. Training your first model and seeing it make predictions — even if slightly off — is magical. I’m focusing on understanding the math behind it all so I can go deeper into real-world applications."
    },
    {
        id: uuid(),
        username: "Shruti_L",
        content: "Sometimes, doing nothing is exactly what I need. I take tech-free walks to clear my head. No phone, no podcasts — just walking and letting my thoughts wander. It's one of the best ways to reset and reconnect with myself."
    },
    {
    id: uuid(),
    username: "Ritika_Foodie",
    content: "There's something magical about homemade food. The aroma of freshly cooked spices, the sound of mustard seeds popping in hot oil, and the joy of tasting a dish you've made from scratch — it's therapeutic. My go-to comfort food is a simple dal chawal with a dollop of ghee.",
    tag: "food"
    },
    {
        id: uuid(),
        username: "Ankit_K",
        content: "I’m building a personal finance tracking app using the MERN stack. It's a way to apply what I've been learning and solve a real problem — budgeting. I'm currently working on authentication and localStorage features. It’s challenging, but I’m learning a lot every day."
    },
{
    id: uuid(),
    username: "Gaurav_Chef",
    content: "Experimenting in the kitchen has taught me more patience than anything else. Last week, I tried recreating a Korean dish called Bibimbap. Though it didn’t look perfect, the flavors were surprisingly close to what I had in Seoul. Cooking helps me travel without leaving my kitchen.",
    tag: "food"
},
{
    id: uuid(),
    username: "Tanya_Tastes",
    content: "I recently gave the viral 'pasta chips' trend a try, and honestly, they lived up to the hype! Boiled pasta, tossed in olive oil and seasoning, baked until crispy — it was crunchy, cheesy, and the perfect Netflix snack. Food trends are so much fun to explore!",
    tag: "food"
},
{
    id: uuid(),
    username: "Aanya_Adventures",
    content: "Traveling solo for the first time changed my perspective on everything. I visited Udaipur, stayed in a quaint heritage haveli, and wandered through narrow streets filled with local art and music. The best part? Watching the sunset over Lake Pichola in complete silence.",
    tag: "travel"
},


{
    id: uuid(),
    username: "Nikita_Vegan",
    content: "Switching to a plant-based diet wasn't easy, but discovering vegan alternatives to my favorite dishes helped a lot. I made a dairy-free creamy mushroom pasta last night using cashew cream, and it was heavenly. Small changes really do add up when it comes to health and taste!",
    tag: "food"
},


    
];


app.get("/", (req, res) => {
    res.render("home.ejs");
});


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts/new",(req,res)=>{
    let {username , content} = req.body;
    let id = uuid();
    posts.push({id, username,content});
    console.log(id, username,content);
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});


app.patch("/posts/:id/",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>p.id === id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>p.id === id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>p.id!==id);
    res.redirect("/posts");
})
