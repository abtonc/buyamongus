const mongoose = require('mongoose');
const validator = require('validator').default;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username required.'],
      validate: {
        validator: (v) => {
          validator.matches(v, /^[a-zA-Z0-9_\.]*$/);
        },
        message: 'Invalid username',
      },
      unique: true,
    },
    password: { type: String, required: [true, 'Password required.'] },
    email: {
      type: String,
      required: [true, 'E-Mail required.'],
      validate: {
        validator: validator.isEmail,
        message: 'Invalid E-Mail',
      },
      unique: true,
    },
    address: {
      postalCode: String,
      country: String,
      region: String,
      city: String,
      details: String,
      phone: String,
    },
    registerDate: { type: Date, required: true, default: new Date() },
    lastLoginDate: { type: Date, required: true, default: new Date() },
  },
  { collection: 'Users' }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;
