import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  songs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'songs' 
  }]
});

const Artist = mongoose.models.artists || mongoose.model('artists', artistSchema);

export default Artist;
