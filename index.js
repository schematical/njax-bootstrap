var path = require('path');
module.exports = function(app){

    app.locals.partials._theme_meta = path.join(__dirname, 'public', 'templates', '_theme_meta.hjs');
    app.locals.partials._theme_header = path.join(__dirname, 'public', 'templates', '_theme_header.hjs');
    app.locals.partials._theme_footer = path.join(__dirname, 'public', 'templates', '_theme_footer.hjs');

}