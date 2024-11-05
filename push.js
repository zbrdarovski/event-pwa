const webpush = require('web-push');

const publicVapidKey = 'publicVapidKey';
const privateVapidKey = 'privateVapidKey';

webpush.setVapidDetails('mailto:email', publicVapidKey, privateVapidKey);

module.exports = webpush;
