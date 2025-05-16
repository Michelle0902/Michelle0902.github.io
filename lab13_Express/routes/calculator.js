const express = require('express');
const router = express.Router();

function parseNumbers(req){
    const a = parseFloat(req.params.a||req.query.a||req.body.a);
    const b = parseFloat(req.params.b||req.query.b||req.body.b);
    if (isNaN(a)||isNaN(b)){
        throw new Error("Invalid numbers provided");
    }
    return {a, b};
}

//Addition
router.get('/addition/:a/:b', (req, res) => {
    try {
        const {a, b} = parseNumbers(req);
        res.json({ results: a+b });
    } catch(error) {
        res.status(400).json({error:error.message});
    }
});

router.get('/addition', (req, res)=>{
    try{
        const {a,b} = parseNumbers(req);
        res.json({results: a+b});
    } catch (error){
        res.status(400).json({error:error.message});
    }
})

router.post('/addition', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a + b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Subtraction
router.get('/subtraction/:a/:b', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a - b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/subtraction', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a - b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/subtraction', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a - b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Multiplication
router.get('/multiplication/:a/:b', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a * b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/multiplication', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a * b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/multiplication', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a * b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Division
router.get('/division/:a/:b', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        if (b === 0) throw new Error("Division by zero is not allowed");
        res.json({ results: a / b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/division', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        if (b === 0) throw new Error("Division by zero is not allowed");
        res.json({ results: a / b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/division', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        if (b === 0) throw new Error("Division by zero is not allowed");
        res.json({ results: a / b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Modulus
router.get('/modulus/:a/:b', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a % b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/modulus', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a % b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/modulus', (req, res) => {
    try {
        const { a, b } = parseNumbers(req);
        res.json({ results: a % b });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;