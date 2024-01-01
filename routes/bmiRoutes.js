const express = require('express');
const router = express.Router();

router.post('/bmicalculator', (req, res) => {
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);

    const bmi = calculateBMI(height, weight);

    res.json({
        bmi: bmi.toFixed(2),
        interpretation: getInterpretation(bmi),
        message: 'BMI calculated successfully',
    });
});

function calculateBMI(height, weight) {
    return weight / ((height / 100) * (height / 100));
}

function getInterpretation(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

module.exports = router;
