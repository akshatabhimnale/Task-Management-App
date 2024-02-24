const { ObjectId } = require("mongodb");
const { connectToMongoDB, client } = require("../Config/Connection");
const taskListing = async (req, res) => {
  try {
    const cl = await client.connect();
    const db = cl.db("TaskManagement");
    const collection = db.collection("Tasks");
    const allTasks = await collection.find().toArray();
    if (allTasks) {
      res.status(200).send(allTasks);
    } else {
      res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    console.log(error);
  }
};
const addTask = async (req, res) => {
  try {
    const { title, desc, due_date } = req.body;
    const status = "Not Completed";
    const cl = await client.connect();
    const db = cl.db("TaskManagement");
    const collection = db.collection("Tasks");

    const newTask = {
      title: title,
      desc: desc,
      due_date: due_date,
      status: status,
    };
    const addedTask = await collection.insertOne(newTask);
    if (addedTask) {
      res.status(200).json({ message: "Task Added" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const cl = await client.connect();
    const db = cl.db("TaskManagement");
    const collection = db.collection("Signup");

    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    const addedNewUser = await collection.insertOne(newUser);
    if (addedNewUser) {
      res.status(200).json({ message: "New User Added" });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const cl = await client.connect();
    const db = cl.db("TaskManagement");
    const collection = db.collection("Signup");
    const emailexists = await collection.findOne({ email: email });

    if (emailexists) {
      const pswdexists = await collection.findOne({ password: password });
      if (pswdexists) {
        res.status(200).json({
          status: true,
          message: "Logged In Successfully ! ",
        });
      } else {
        res.status(401).json({ status: false, message: "Wrong Password !" });
      }
    } else {
      res.status(401).json({ status: false, message: "Wrong Login Id !" });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const cl = await client.connect();
    const db = cl.db("TaskManagement");
    const collection = db.collection("Tasks");
    const allTasks = await collection.deleteOne({ _id: new ObjectId(id) });
    console.log(allTasks);
    if (!allTasks) {
      res.status(400).send("Id Not Found in Database");
    }
    res.status(200).send(allTasks);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { taskListing, addTask, getLogin, deleteTask, signUp };
