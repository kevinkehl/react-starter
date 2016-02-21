const createBrowserHistory = require('history/lib/createBrowserHistory');

// This module initializes a singleton history object that we can use throughout
// the application.
//
// @see https://github.com/rackt/history
const History = createBrowserHistory();

module.exports = History;
