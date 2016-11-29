const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
	//check if there is token in the body, a url parameter, or the request headers
     let token = req.body.token || req.param('token') || req.headers['authorization'];
	    if (token) {
			//if there is a token try and decode it with the key that was used to encrypt it
            jwt.verify(token, 'brainstationkey', function(err, decoded) {          
	            if (err) {
	                return res.status(403).json({ success: false, message: 'Failed to authenticate token.' });      
	            } else {
	                req.decoded = decoded;  
	                next();
	            }
	        });
	        
	    } else {
			//if there is no token send an error
	        return res.status(403).send({ 
	            success: false, 
	            message: 'No token provided.'
	        });
	    }
};

