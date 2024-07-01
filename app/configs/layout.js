const expressLayouts = require('express-ejs-layouts');

module.exports = {
    PUBLIC_DIR : '/public/web',
    VIEW_ENGINE : 'ejs',
    VIEW_DIR : 'view/web',
    EJS : {
        expressLayouts,
        layout : 'master',
        EXTRCTSCRIPT : true,
        EXTRCTSTYLE : true
    }
}