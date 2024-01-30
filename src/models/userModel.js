import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tier: {
    type: String,
  },
  playlist: {
    type: [Array],
    required: false,
  },
  favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'songs' 
  }]
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
