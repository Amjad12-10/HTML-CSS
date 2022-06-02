# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

### Links

- Solution URL:
- Live Site URL:

## My process

### Built with

- html 
- CSS

### What I learned
To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
<!--MainBackground-->
<div class="background">
  <!--Brand Picture-->
  <div class="Picture">
    <img src="images/illustration-hero.svg" alt="">
  </div>
  <div class="info">
    <h2>Order Summary</h2>
    <h3>You can now listen to millions of songs, audiobooks, and podcasts on any 
      device anywhere you like!</h3>
  </div>
  <div class="price">
    <div class="money">
      <img src="images/icon-music.svg" alt="">
    </div>
    <div class="money">
      <p class="money-p"><strong>Annual Plan</strong></p>
      <p>$59.99/year</p>
    </div>
    <div class="money">
      <a href=""><strong>Change</strong></a>
    </div>
  </div>
  <div class="buy">
    <h2>Proceed to Payment</h2>
  </div>
  <div class="Cancel">
    <h2><strong>Cancel Order</strong></h2>
  </div>
</div>
```
```css
body{
    margin: 0;
    background-color: hsl(225, 100%, 94%);
    font-size: 15px;
    font-family: 'Red Hat Display', sans-serif;
/*  
    background-color: hsl(245, 75%, 52%);
    background-color: hsl(225, 100%, 98%);
    background-color: hsl(224, 23%, 55%);
    background-color: hsl(223, 47%, 23%);
*/
}
h2,h3{
    margin: 0;
}
h3{
    color: hsl(224, 23%, 55%);
    font-weight: 600;
    font-size: 15px;
    margin-top: 15px;
}
p{
    color: hsl(224, 23%, 55%);
    font-weight: 200;
}
a{
    color:  hsl(245, 75%, 52%);
    font-weight: 600;
}
.background{
    width: 350px;
    height: 550px;
    background-color: white;
    margin: auto;
    margin-top: 100px;
    border-radius: 20px;
}
.Picture{
    width: 100%;
    background-color: aqua;
    height: 31%;
    border-radius: 20px 20px 0 0px;
}
.Picture img{
    width: 100%;
    border-radius: 20px 20px 0 0px;
}
.info{
    width: 80%;
    height: 25%;
    margin: auto;
    margin-top: 30px;
    text-align: center;
}
.price{
    width: 80%;
    height: 15%;
    margin: auto;
    margin-top: -15px;
    border-radius: 10px;
    background-color:hsl(225, 100%, 98%);
}
.money{
    text-align: center;
    display: inline-block;
    margin: 0 13px;
}
.money-p{
    margin: 0;
    margin-top: 15px;
    font-weight: 800;
    color:black;
}
.money a{
    position:relative;
    bottom: 20px;
}
.money a:hover{
    color: hsla(245, 75%, 52%, 0.8);
}
.buy{
    width: 80%;
    height: 10%;
    margin: auto;
    margin-top: 15px;
    text-align: center;
    border-radius: 10px;
    background-color: hsl(245, 75%, 52%);
}
.buy:hover{
    background-color: hsla(245, 75%, 52%, 0.8);
    cursor: pointer;
}
.buy h2{
    height: 25px;
    padding-top: 16px;
    font-size: 15px;
    color: white;
}
.Cancel{
    width: 90%;
    height: 5%;
    margin: auto;
    text-align: center;
    margin-top: 10px;
}
.Cancel:hover{
    color:black;
    cursor: pointer;
}
.Cancel h2{
    font-size: 15px;
    margin: 0;
    font-weight: 800;
    color: hsl(224, 23%, 55%);
}
```

## Author

- Website - [Amjad](https://amjad12-10.github.io/Amjad-Personal-Site/)
- Frontend Mentor - [@Amjad12-10](https://www.frontendmentor.io/profile/Amjad12-10)
- Twitter - [@Amjad12_10](https://www.twitter.com/Amjad12_10)


