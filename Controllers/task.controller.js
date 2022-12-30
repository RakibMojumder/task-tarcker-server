const Task = require('../Models/task.model');

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json({
            success: true,
            data: tasks
        })
    } catch (error) {
        console.log(error.message);
    }
};

const postTask = async (req, res) => {
    try {
        const task = req.body;
        await new Task(task).save();
        res.json({
            success: true,
            message: "Successfully post the task"
        });
    } catch (error) {
        console.log(error.message);
    }
};


const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        await Task.findOneAndDelete(id)
        res.json({
            success: true,
            message: "Task is deleted"
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { getAllTask, postTask, deleteTask };