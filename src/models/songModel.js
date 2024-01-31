import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
  },
  genre: {
    type: String,
  },
  songUrl: {
    type: String,
    required: true,
  },
});

const Song = mongoose.models.songs || mongoose.model('songs', songSchema);

export default Song;
