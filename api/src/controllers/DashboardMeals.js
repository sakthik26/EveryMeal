const DashboardMealModel = require('../models/DashboardMeals');

const create = (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    DashboardMealModel.create(req.body)
        .then ( meal => res.status(201).json(meal))
        .catch(error => res.status(500).json({
            error: 'Internal server error',
            message: error.message
        }));
};

const read = (req, res) => {
    DashboardMealModel.findById(req.params.id).exec()
        .then(meal => {
            if (!meal) return res.status(404).json({
                error: 'Not Found',
                message: 'Meal not found'
            });
            res.status(200).json(meal)
        })
        .catch(error => res.status(500).json({
            error: 'Internal Server Error',
            message: error.message
        }))
}

const update = (req, res) => {
    if (Object.keys(req.body).length === 0)
    {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    DashboardMealModel.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true}).exec()
        .then(meal => res.status(200).json(meal))
        .catch(error => res.status(500).json({
            error: 'Internal ServerError',
            message: error.message
        }));
}

const remove = (req,res) => {
    DashboardMealModel.findByIdAndRemove(req.params.id).exec()
    .then(() => res.status(200).json({message: `Meal with id ${req.params.id} was deleted`}))
    .catch(error => res.status(500).json({
        error: 'Internal Server Error',
        message: error.message
    }));
}

const list = (req, res) => {
    DashboardMealModel.find({"user_id": req.params.user_id}).exec()
    .then(meals => res.status(200).json(meals))
    .catch(error => res.status(500).json({
        error: 'Internal Server Error',
        message: error.message
    }));
}

module.exports = {
    create,
    read,
    update,
    remove,
    list
};