const Result = require('../models/result');
 
const addResult = async (req, res) => {
    try {
        const { MovieName, Comment, Rating } = req.body;

        if (!MovieName || !Comment || !Rating) {
            return res.status(400).json({ message: 'Fill all the fields first ' });
        }

        const result = new Result({ MovieName, Comment, Rating });
        await result.save();

        res.status(201).json({ message: 'Result added successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getResults = async (req, res) => {
    try {
        const results = await Result.find();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


module.exports = { addResult, getResults };