const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['individual', 'business'], required: true },

    //individual users
    name: { type: String },
    surname: { type: String },
    dateOfBirth: { type: Date },

    //business users
    businessName: { type: String },

    // date
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });


  module.exports = mongoose.model('user', UserSchema)