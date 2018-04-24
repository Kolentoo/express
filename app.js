var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var axios = require('axios');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.get('/astro/all',(req,res)=>{
  let url = 'http://api.jisuapi.com/astro/all?appkey=adfb0e1348ec0adf'
  let arr1
  axios.get(url).then(json=>{
    arr1 = json.data
  }).then(()=>{
    res.json(arr1)
  })
})

app.get('/weather/query/:city',(req,res)=>{
  let city = req.params.city;
  let url = 'http://api.jisuapi.com/weather/query?appkey=adfb0e1348ec0adf'
  let arr2
  axios.get(url,{
    params:{
      city:city
    }
  }).then(json=>{
    arr2 = json.data
  }).then(()=>{
    res.json(arr2)
  })
})

app.get('/astro/fortune/:astroid',(req,res)=>{
  let astroid = req.params.astroid;
  let url = 'http://api.jisuapi.com/astro/fortune?appkey=adfb0e1348ec0adf'
  let arr3
  axios.get(url,{
    params:{
      astroid:astroid
    }
  }).then(json=>{
    arr3 = json.data
  }).then(()=>{
    res.json(arr3)
  })
})

app.get('/Movie/MovieComingNew.api',(req,res)=>{
  let url = 'http://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290'
  let arr2
  axios.get(url,{
  }).then(json=>{
    arr2 = json.data
  }).then(()=>{
    res.json(arr2)
  })
})

app.get('/PageSubArea/HotPlayMovies.api',(req,res)=>{
  let url = 'http://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290'
  let arr2
  axios.get(url,{
  }).then(json=>{
    arr2 = json.data
  }).then(()=>{
    res.json(arr2)
  })
})

app.get('/movie/detail.api/:movieId',(req,res)=>{
  let url = 'http://api-m.mtime.cn/movie/detail.api?locationId=290'
  let arr3
  let movieId = req.params.movieId
  axios.get(url,{
    params:{
      movieId:movieId
    }
  }).then(json=>{
    arr3 = json.data
  }).then(()=>{
    res.json(arr3)
  })
})

app.get('/v4/discovery/hot/:num',(req,res)=>{
  let url = 'http://baobab.kaiyanapp.com/api/v4/discovery/hot'
  let num = req.params.num
  let arr3
  axios.get(url,{
    params:{
      num:5
    }
  }).then(json=>{
    arr3 = json.data
  }).then(()=>{
    res.json(arr3)
  })
})

app.get('/api/data/Android/10/:pages',(req,res)=>{
  let pages = req.params.pages
  let url = `http://gank.io/api/data/Android/10/${pages}` 
  let arr3
  axios.get(url,{
  }).then(json=>{
    arr3 = json.data
  }).then(()=>{
    res.json(arr3)
  })
})

// 动漫电影排行
app.get('/chart/top_list',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=25&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})

// 剧情电影排行
app.get('/chart/top_story',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=11&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})

// 喜剧电影排行
app.get('/chart/top_happy',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=24&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})

// 动作电影排行
app.get('/chart/top_act',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=5&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})

// 爱情电影排行
app.get('/chart/top_love',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=13&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})

// 科幻榜单
app.get('/chart/top_scientist',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=17&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})

// 惊悚榜单
app.get('/chart/top_scare',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=19&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})

// 恐怖榜单
app.get('/chart/top_horror',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=20&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})

// 灾难榜单
app.get('/chart/top_disaster',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://movie.douban.com/j/chart/top_list?type=12&interval_id=100%3A90&action=&start=0&limit=20` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})





// 电影详情
app.get('/v2/movie/subject/:mid',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let mid = req.params.mid
  let url = `https://api.douban.com/v2/movie/subject/${mid}` 
  let arr4
  axios.get(url,{
  }).then(json=>{
    arr4 = json.data
  }).then(()=>{
    res.json(arr4)
  })
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
