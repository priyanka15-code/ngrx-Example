const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateToken = (user) => {
  const payload = {
    userId: user._id.toString(),
    username: encrypt(user.username), 
    email: encrypt(user.email)
  }  
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('No secret key found');
  }

  return jwt.sign(payload, secretKey, { 
    expiresIn: '1h',
    algorithm: 'HS256' 
  });
};

function encrypt(data) {
  const algorithm = 'aes-256-cbc';  //Advance encoding standerd 256 bit key in cipher block chaining (Type of symmetric algo)
  const key = crypto.randomBytes(32); // Generate a random 32-byte key
  const iv = crypto.randomBytes(16); // 16-byte initialization vector 
  const cipher = crypto.createCipheriv(algorithm, key, iv);// https://www.geeksforgeeks.org/node-js-crypto-createcipheriv-method/
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

module.exports = { generateToken };

/*  const jwt = require('jsonwebtoken');

const generateToken = (user, exWord) => {
  const payload = {
    userId: user._id,
    username: user.username,
    email: user.email
  };

  const getExWord = () => {
    const now = new Date();
    
    const time = now.toTimeString().split(' ')[0];
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const date = now.toISOString().split('T')[0];
    
    return `${time}-${day}-${date}`;
  };
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('No secret key found.');
  }

  
  const combinedKey = secretKey + getExWord();
  console.log("token",combinedKey);

  return jwt.sign(payload, combinedKey, { 
    expiresIn: '1h'
  });
};

module.exports = { generateToken };  */





/*const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    userId: user._id.toString(), 
    username: user.username,
    email: user.email
  };
  
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('No secret key found.');
  }

  
  const token = jwt.sign(payload, secretKey, { 
    expiresIn: '1h',

  });
  const prefixedToken = `https://com.io/${token}`;
  const urlSafeToken = encodeURIComponent(prefixedToken);

 

  return urlSafeToken;
  
module.exports = { generateToken };*/

 
/*  const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    userId: user._id.toString(),
    username: user.username, 
    email: user.email
  }  
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('No secret key found.');
  }

  const token = jwt.sign(payload, secretKey, {
    expiresIn: '1h',
  });

  const modifiedToken = token.replace(/J/g, '.j');

  return modifiedToken;
}; 


 module.exports = { generateToken }; 
 
 */
/* const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    userId: user._id.toString(),
    username: user.username, 
    email: user.email
  }  
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('No secret key found.');
  }

  return jwt.sign(payload, secretKey, {
    expiresIn: '1h',
  });

  
};



module.exports = { generateToken };
  */