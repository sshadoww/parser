const request = require('request');
const cheerio = require('cheerio');

let autobazar = {
	getPost: function(url) {
		request(url, function (err, res, body) {
               if (err) throw err;

               let $ = cheerio.load(res.body);
               let post = {
                    name      : $('div>h2').text(),
                    prise     : $('div.QSUFp>div:nth-child(1)').text(),
                    year      : $('div.RyC3G>div:contains("Год выпуска")').next().text(),
                    mileage   : $('div.RyC3G>div:contains("Пробег")').next().text(),
                    kyzov     : $('div.RyC3G>div:contains("Кузов")').next().text(),
                    type      : $('div.RyC3G>div:contains("Тип кузова")').next().text(),
                    color     : $('div.RyC3G>div:contains("Цвет")').next().text(),
                    kyzov     : $('div.RyC3G>div:contains("Кузов")').next().text(),
                    engine    : $('div.RyC3G>div:contains("Двигатель")').next().text(),
                    box       : $('div.RyC3G>div:contains("Коробка")').next().text(),
                    privod    : $('div.RyC3G>div:contains("Привод")').next().text(),
                    customs   : $('div.RyC3G>div:contains("Таможня")').next().text(),
                    power     : $('div.RyC3G>div:contains("Мощность")').next().text(),
                    desc      : $('div.kQnkp').text(),
                    mark      : $('div._3D7Hi > span:nth-child(2) > a').text(),
                    module    : $('div._3D7Hi > span:nth-child(3) > a').text(),
               };
               console.log(post);
          });
	},
	getPosts: function(URL) {
	    request(URL, function (err, res, body) {
	          if (err) throw err;

	          let $ = cheerio.load(res.body);

	          $('div._2KGO4 ._1i-so a.b8dUr').each(function() {
	               let url = 'https://ab.ua' + $(this).attr('href')

	               autobazar.getPost(url)

	          });
	     });
	}
}
module.exports = autobazar;
