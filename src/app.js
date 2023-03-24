const express = require('express');
const path = require('path');
const port = 5550;

const db = require('./config/mongoose');
const app = express();
const routes = require('./routes/main');
const Details = require('./models/detail');
const { url } = require('inspector');
const detailSlider = require('./models/slider');

app.use(express.urlencoded());
//using static files
app.use('/static', express.static('public')); // this '/static' can be used to access files.

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));


//middleware defined - ki agr port k baad koi slash nhi daalenge to routes call ho jayenge.
app.use('', routes);


/* 
 Details.create({
    brandName: "TUT-LERS",
    links: [
       {
           label: 'Home',
           url: '/'
       },
       {
           label: 'Services',
           url: '/'
       },
       {
           label: 'Gallery',
           url: '/gallery'
       },
       {
           label: 'About',
           url: '/'
       },
       {
        label: 'Contact-Us',
        url: '/'
      }
    ]
});
*/



 /* detailSlider.create([
       {
        title: 'First Slide Title',
        subtitle: 'Content of First Slide Comes Here',
        imageURL: '/static/images/firstImage.png'
       },

       {
        title: 'Second Slide Title',
        subtitle: 'Content of Second Slide Comes Here',
        imageURL: '/static/images/secondImage.png'
       }
    ]);

    */ 


app.listen(port, (err)=> {
            if(err){
                console.log('Error starting the server: ', err);
                return;
            }

            console.log('Server start running successfully on: ', port);
});

module.exports = Details;