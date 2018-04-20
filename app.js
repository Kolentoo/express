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

app.get('/api/timeline_v2_global',(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  let url = `https://bangumi.bilibili.com/api/timeline_v2_global` 
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
