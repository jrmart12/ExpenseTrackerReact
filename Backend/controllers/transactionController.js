const Transaction = require ('../models/Transaction');
// get all transactions
// route: GET /api/v1/transactions
// public access
exports.getTransactions = async (req,res,next) =>{
    try {
     const transactions = await Transaction.find();

     return res.status(200).json({
         success: true,
         count: transactions.length,
         data: transactions
     });
    } catch (e) {
     return res.status(500).json({
         success:false,
         error: 'server error'
     });
    }
}

// ADD transactions
// route: POST /api/v1/transactions
// public access
exports.addTransaction = async (req,res,next) =>{
    try {
        const {text,amount} = req.body;
        const transaction = await Transaction.create(req.body);
    
        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (e) {
        if(e.name == 'ValidationError'){
            const messages = Object.values(e.errors).map(val => val.message);
            return res.status(500).json({
                success: false,
                error: messages
            });
        }else{
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }

}

// Delete transactions
// route: DELETE /api/v1/transactions
// public access
exports.deleteTransaction = async (req,res,next) =>{
    res.send('Delete transaction');
}