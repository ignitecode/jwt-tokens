const jwt = require('jsonwebtoken');

const user = {
  name: 'Joe',
  id: 1,
  address: '123 Fake Street',
  birthdate: '01-01-1955'
}

const token = jwt.sign({ data: user }, 'MY_SUPER_SECRET_PASSWORD', { expiresIn: '1h' });

jwt.verify(token, 'MY_SUPER_SECRET_PASSWORD', (err, decoded) => {
  if(err)
  console.log('[ERROR] Error Decoding Payload: ', err);
  console.log('DECODED:', decoded);
});
