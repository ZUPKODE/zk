/**
 * GET /
 * Courses page.
 */
exports.getCourses = (req, res) => {
    res.render('courses', {
        title: 'Courses'
    });
};