
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Finbar on the Web' })
};

