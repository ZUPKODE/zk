/**
 * GET /
 * Challenges page.
 */
exports.getChallenges = (req, res) => {
    res.render('challenges', {
      title: 'Challenges'
    });
  };