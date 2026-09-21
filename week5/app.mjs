import express from "express";

const app = express();
app.use(express.json());

const TODOS = [
    {id: 1, title: "ทำการบ้าน", completed: false, priority: "high"},
    {id: 2, title: "อ่านหนังสือ", completed: true, priority: "medium"},
    {id: 3, title: "ออกกำลังกาย", completed: false, priority: "medium"},
    {id: 4, title: "ทำอาหาร", completed: true, priority: "low"}
];

const PRIORITIES = ["high","normal", "low" ];
function validateTodo(req,res,next) {
    const {title, priority} = req.body ?? {};

    if(typeof title !== "string" || title.trim() === ""){
        return res.tatus(400).json({error: "ฉันต้องมี title เป็นข้อความ"});
    }
    if (priority !== undefined  && ! PRIORITIES.includes(priority)) {
        return res.tatus(400).json({error: "priority ไม่ถูกต้อง"});
    }
    return next();
}

const todoRouter = express.Router();
todoRouter.get("/health",(req, res) => {
    res.json({status: "ok" });
});

todoRouter.get("/",(req,res) => {
    res.json(TODOS.map((t) => ({...t})));
});

todoRouter.post("/todos", validateTodo,(req,res) => {
    const created = {
        id: String(TODOS.length + 1),
        title: req.body.title,
        done: false,
        priority: req.body.priority ?? "normal",
    };
    TODOS.push(created);
    res.status(201).json({...created});
});

app.use("/api/v1/todos", todoRouter)

app.listen(3000,() => {
    console.log("เซร์ฟเวอร์ทำงานปกติที่ http://localhost:3000");
});


        
        
        
