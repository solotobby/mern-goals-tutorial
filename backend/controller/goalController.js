const asyncHandler = require('express-async-handler')
//@desc Get goals
//@route GET api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "get goals"});
})

//@desc Set goal
//@route POST api/goals
//@access private
const setGoal = asyncHandler(async (req, res) => {
   if(!req.body.text){ //checks if text is passed 
       res.status(400)
       throw new Error('please add a text field')
   } 
    res.status(201).json({message: "Create goals"});
})

//@desc Update goal
//@route UPDATE api/goals/:id
//@access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goals ${req.params.id}`});
})

//@desc Delete goal
//@route DELETE api/goals/:id
//@access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goals ${req.params.id}`});
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}