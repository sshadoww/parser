const request = require('request');
const cheerio = require('cheerio');

let autobazar = function () {
	let getPost = function(url) {
		request(url, function (err, res, body) {
          if (err) throw err;

          let $ = cheerio.load(res.body);
          let post = {};

          post.name    = $('div>h2').text();
          post.prise   = $('div.QSUFp>div:nth-child(1)').text();
          post.year    = $('.RyC3G:nth-child(1) div._29-AP').text();
          post.mileage = $('.RyC3G:nth-child(2) div._29-AP').text();
          post.kyzov   = $('.RyC3G:nth-child(4) div._29-AP').text();
          post.type    = $('.RyC3G:nth-child(5) div._29-AP').text();
          post.color   = $('.RyC3G:nth-child(6) div._29-AP').text();
          post.engine  = $('.RyC3G:nth-child(7) div._29-AP').text();
          post.box     = $('.RyC3G:nth-child(8) div._29-AP').text();
          post.privod  = $('.RyC3G:nth-child(9) div._29-AP').text();
          post.customs = $('.RyC3G:nth-child(10) div._29-AP').text();

          console.log(post);
     });
	}
	this.getPosts = function(URL) {
	    request(URL, function (err, res, body) {
	          if (err) throw err;

	          let $ = cheerio.load(res.body);

	          $('div._2KGO4 ._1i-so a.b8dUr').each(function() {
	               let url = 'https://ab.ua' + $(this).attr('href')

	               getPost(url)

	          });
	     });
	}
}
module.exports = autobazar;
