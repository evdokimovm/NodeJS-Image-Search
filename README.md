# Node.js Image Search

Install:
	
	1. git clone https://github.com/evdokimovm/NodeJS-Image-Search.git
	2. In /app/index.js file on line 9 use your API_KEY http://www.bing.com/toolbox/bingsearchapi
	3. cd NodeJS-Image-Search
	4. Run MongoDB use mongod in your terminal
	5. npm install
	6. node server.js

Usage example:

```text
http://localhost:8080/api/lolcats%20funny?offset=10
http://localhost:8080/latest
```

```javascript
fetch('http://localhost:8080/api/lolcats%20funny?offset=10')
	.then((res) => {
		res.json().then((data) => {
			console.log(data);
		});
	})
	.catch((err) => {
		console.log(err);
	});
```

```javascript
fetch('http://localhost:8080/latest')
	.then((res) => {
		res.json().then((data) => {
			console.log(data);
		});
	})
	.catch((err) => {
		console.log(err);
	});
```

Output:

```json
[{
	"url": "http://4.bp.blogspot.com/-epxUtTpidgM/Tl0LrfIwPOI/AAAAAAAAdOY/rwZA0Zb_jWg/s1600/lolcats5.jpg",
	"snippet": "Hilarious LOLcats Seen On www.coolpicturegallery.us",
	"thumbnail": "http://ts1.mm.bing.net/th?id=OIP.Mb796e2f7a6f4001d32c898791a7c4921H0&pid=15.1",
	"context": "http://coolanimalspics.blogspot.com/2011/08/hilarious-lolcats.html"
}, {
	"url": "http://mattiesworld.gotdns.org/weblog/wp-content/uploads/2007/11/lolcat-funny-picture-mario-cat.jpg",
	"snippet": "This entry was posted in lounge by mattie . Bookmark the permalink .",
	"thumbnail": "http://ts4.mm.bing.net/th?id=OIP.M10a617b47b5911663fb12278f4758161H0&pid=15.1",
	"context": "http://mattiesworld.gotdns.org/weblog/2007/11/06/lolcats"
}, {
	"url": "http://www.dumpaday.com/wp-content/uploads/2012/12/funny-lolcats.jpg",
	"snippet": "funny lolcats - Dump A Day",
	"thumbnail": "http://ts4.mm.bing.net/th?id=OIP.M458d6d7c38dfd8f66c87f7bf8fc39c64o0&pid=15.1",
	"context": "http://dumpaday.com/random-pictures/funny-pictures/random-funny-pictures-28-pics-2/attachment/funny-lolcats"
}, {
	"url": "http://harry.enzoverder.be/cats/lolcats-funny-picture-my-feet.jpg",
	"snippet": "feet back lolcats funny picture lalalalala lolcats funny pictures ...",
	"thumbnail": "http://ts4.mm.bing.net/th?id=OIP.M2d09bc92f2d2455c7bf9ca0de7bae80eo0&pid=15.1",
	"context": "http://harry.enzoverder.be/cats/tn/lolcats-funny-picture-my-feet.jpg.html"
}, {
	"url": "http://funnypicture.org/wallpaper/2015/06/lolcats-6-background.jpg",
	"snippet": "Lolcats 22 Wide Wallpaper - Funnypicture.org",
	"thumbnail": "http://ts2.mm.bing.net/th?id=OIP.M12e2de6820299eabfbcd552d7eeb7ea2o0&pid=15.1",
	"context": "http://funnypicture.org/lolcats-22-wide-wallpaper.html"
}, {
	"url": "http://cdn.pearltrees.com/s/pic/sq/lolcats-funny-cat-pictures-1182244",
	"snippet": "Lolcats Funny Cats Pictures",
	"thumbnail": "http://ts2.mm.bing.net/th?id=OIP.M0901d0f9ed299db2582c85f56f01cb98o0&pid=15.1",
	"context": "http://quoteko.com/lolcats-meme-funny-cat-pictures.html"
}, {
	"url": "http://www.lolcats.com/images/u/12/24/lolcatsdotcompromdate.jpg",
	"snippet": "LOLCats - Funny cat pictures",
	"thumbnail": "http://ts2.mm.bing.net/th?id=OIP.Mb0c49c87eac3d950d3c48592a34944b0o0&pid=15.1",
	"context": "http://www.lolcats.com/"
}, {
	"url": "http://meme-lol.com/wp-content/uploads/meme/2014/12/-LOLCats-Funny-Pictures-MEME-2015.jpg",
	"snippet": "LOLCats Funny Pictures MEME 2015",
	"thumbnail": "http://ts2.mm.bing.net/th?id=OIP.Ma466e2708d025d10f2b97aa63f50b52ao0&pid=15.1",
	"context": "http://meme-lol.com/funny/lolcats-funny-pictures-meme-2015/"
}, {
	"url": "http://imgfave-chat-herokuapp-com.global.ssl.fastly.net/image_cache/136793069327660.jpg",
	"snippet": "Lolcats - Lolcats n' Funny Cat Pictures - funny cat pictures - Chee...",
	"thumbnail": "http://ts3.mm.bing.net/th?id=OIP.M210f1a71a607b04b3c2b4158ac20fb9co0&pid=15.1",
	"context": "http://imgfave.com/view/3529765"
}, {
	"url": "http://2.bp.blogspot.com/-UTfReaVIzog/UZkV6aGRjdI/AAAAAAAAIN0/84CcNBRrPco/s1600/LOLCats-lol-cats-52.jpg",
	"snippet": "Photography: LOLCats - My Planet Needs Me",
	"thumbnail": "http://ts1.mm.bing.net/th?id=OIP.M65937c3530f9be634e8a8a1236dd8b4bH0&pid=15.1",
	"context": "http://photography-galleries.blogspot.com/2013/05/lolcats-my-planet-needs-me.html"
}]
```

Example `latest` output:

```js
[{
	"term": "lolcats funny",
	"when": 1465779400
}, {
	"term": "lolcats funny",
	"when": 1465779398
}, {
	"term": "lolcats funny",
	"when": 1465779395
}, {
	"term": "lolcats funny",
	"when": 1465779393
}, {
	"term": "lolcats funny",
	"when": 1465779391
}, {
	"term": "lolcats funny",
	"when": 1465779389
}, {
	"term": "lolcats funny",
	"when": 1465779387
}, {
	"term": "lolcats funny",
	"when": 1465779386
}, {
	"term": "lolcats funny",
	"when": 1465779384
}, {
	"term": "lolcats funny",
	"when": 1465779382
}]
```
