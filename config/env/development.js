'use strict';

module.exports = {
 db : 'mongodb://localhost/g-project',
 facebook : {
     clientID: process.env.FACEBOOK_ID || '430150550513082',
     clientSecret: process.env.FACEBOOK_SECRET || 'de605a28c71c62c43fceb3be84a26062',
     callbackURL: '/auth/facebook/callback'
 }
};