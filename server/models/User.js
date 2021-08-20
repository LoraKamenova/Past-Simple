const mongoose = require('mongoose');
const encryption = require('../util/encryption');

const userSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
    unique: true
  },
  profileImageUrl: {
    type: mongoose.Schema.Types.String,
    required: false,
  },
  hashedPass: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  salt: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  roles: [{
    type: mongoose.Schema.Types.String
  }],

});

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
  }
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
  try {
    let users = await User.find();
    if (users.length > 0) return;
    const salt = encryption.generateSalt();
    const hashedPass = encryption.generateHashedPassword(salt, 'Admin');
    return User.create({
      name: 'Admin',
      email: 'admin@admin.com',
      profileImageUrl: 'https://i.pinimg.com/originals/d6/a0/96/d6a0965b7ddc8a5c40edcfd38e2bc859.jpg',
      salt,
      hashedPass,
      roles: ['Admin']
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = User;
