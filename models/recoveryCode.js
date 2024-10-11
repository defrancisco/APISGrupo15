const mongoose = require('mongoose');

const RecoveryCodeSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '10m' },
});

export default mongoose.model('RecoveryCode', RecoveryCodeSchema);