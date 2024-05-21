// controllers/oneRMController.js
const formulas = require('../models/oneRMModel');

const calcAll = (req, res) => {
    const { weight, reps } = req.body;
    
    if (typeof weight !== 'number' || typeof reps !== 'number' || weight <= 0 || reps <= 0) {
        return res.status(400).json({ error: 'Invalid input. Weight and reps must be positive numbers.' });
    }

    const results = formulas.map(formula => ({
        name: formula.name,
        oneRM: formula.formula(weight, reps)
    }));

    res.json(results);
};

const calcOne = (req, res) => {
    const { weight, reps } = req.body;
    const abbreviation = req.params.abbreviation.toUpperCase()
    
    if (typeof weight !== 'number' || typeof reps !== 'number' || weight <= 0 || reps <= 0) {
        return res.status(400).json({ error: 'Invalid input. Weight and reps must be positive numbers.' });
    }

    const formula = formulas.find(formula => formula.abbreviation == abbreviation)

    res.json({
        name: formula.name,
        oneRM: formula.formula(weight, reps)
    });
}

module.exports = {
    calcAll,
    calcOne,
};
