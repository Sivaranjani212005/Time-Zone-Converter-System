const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var usersRouter = require('./routes/users');
const contactRouter = require('./routes/contactRoutes');
const timeRouter = require('./routes/timeRoutes');
const app = express();



require('dotenv').config();
mongoose.connect('mongodb://localhost:27017/timezone_converter')
.then(() => {console.log('MongoDB connected')
})
.catch((err) => console.error('MongoDB connection error:', err));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/timezone_converter', usersRouter);
app.use('/timezone_converter', contactRouter);
app.use('/timezone_converter', timeRouter);
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;
