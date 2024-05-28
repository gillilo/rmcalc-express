// controllers/oneRMController.js
const formulas = require('../models/oneRMModel');

const calcAll = (req, res) => {
    const { weight, reps } = req.body;

    const w = Number(weight);
    const r = Number(reps);

    if (w === NaN || r === NaN || w <= 0 || r <= 0) {
        return res.status(400).json({ error: 'Invalid input. Weight and reps must be positive numbers.' });
    }

    const results = formulas.map(formula => ({
        name: formula.name,
        oneRM: formula.formula(weight, reps)
    }));

    res.json(results);
};

const calcAvg = (req, res) => {
    const { weight, reps } = req.query;

    const w = Number(weight);
    const r = Number(reps);

    if (w === NaN || r === NaN || w <= 0 || r <= 0) {
        return res.status(400).json({ error: 'Invalid input. Weight and reps must be positive numbers.' });
    }

    let sum = 0;
    formulas.map(formula => {
        sum += formula.formula(weight, reps)
    });

    const average = sum / formulas.length;

    res.json(average);
};

const calcOne = (req, res) => {
    const { weight, reps } = req.body;
    const abbreviation = req.params.abbreviation.toUpperCase();

    const w = Number(weight);
    const r = Number(reps);

    if (w === NaN || r === NaN || w <= 0 || r <= 0) {
        return res.status(400).json({ error: 'Invalid input. Weight and reps must be positive numbers.' });
    }

    const formula = formulas.find(formula => formula.abbreviation == abbreviation);

    res.json({
        name: formula.name,
        oneRM: formula.formula(w, r)
    });
};

const calcOneV = (req, res) => {
    const { weight, reps } = req.query;
    const abbreviation = req.params.abbreviation.toUpperCase();

    const w = Number(weight);
    const r = Number(reps);

    if (w === NaN || r === NaN || w <= 0 || r <= 0) {
        return res.status(400).json({ error: 'Invalid input. Weight and reps must be positive numbers.' });
    }

    const formula = formulas.find(formula => formula.abbreviation == abbreviation);

    res.json(formula.formula(weight, reps));
};

const home = (req, res) => {
    res.json();
}

module.exports = {
    calcAll,
    calcAvg,
    calcOne,
    calcOneV,
    home
};
