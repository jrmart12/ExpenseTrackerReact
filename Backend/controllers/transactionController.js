// get all transactions
// route: GET /api/v1/transactions
// public access
exports.getTransactions = (req,res,next) =>{
    res.send('Get transactions');
}

// ADD transactions
// route: POST /api/v1/transactions
// public access
exports.addTransaction = (req,res,next) =>{
    res.send('Post transaction');
}

// Delete transactions
// route: DELETE /api/v1/transactions
// public access
exports.deleteTransaction = (req,res,next) =>{
    res.send('Delete transaction');
}