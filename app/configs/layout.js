const expressLayouts = require('express-ejs-layouts');

module.exports = {
    PUBLIC_DIR : process.env.PUBLIC_DIR,
    VIEW_ENGINE : 'ejs',
    VIEW_DIR : 'view/web',
    EJS : {
        expressLayouts,
        layout : 'master',
        EXTRCTSCRIPT : true,
        EXTRCTSTYLE : true
    }
}
// console.log(process.env.PUBLIC_DIR);