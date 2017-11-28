/**
 * GET /
 * Playground page.
 */
exports.getPlayground = (req, res) => {
    if(req.query && req.query.language){
        res.render('playground', {
            title: 'Playground',
            language: req.query.language
        });
    }
    else{
        req.flash('errors', {msg: 'The programming language you specified is not supported by Zupkode. Ping vivek@zupkode.com to add this language'});
        return res.redirect('/');
    }
};