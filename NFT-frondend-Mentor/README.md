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
![Desktop](https://user-images.githubusercontent.com/75468288/170020548-a39ef188-ceac-4958-8eba-dc365926478b.jpg)
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
  <!-- Background-->
    <!-- Image -->
    <!-- h1 -->
    <!-- p -->
    <!-- price --> <!--Value-->
    <!-- hr -->
    <!-- p -->
  <!-- Background -->   
  <div> 
  <div class="background">
    <div class="image">
      <img src="images/image-equilibrium.jpg" alt="NFT-Preview">
    </div>
    <div class="info">
      <h2>Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>
    </div>
    <div class="price">
    <img class="ETH-Image" src="images/icon-ethereum.svg" alt="ETH-Image">
    <p class="ETH">0.041 ETH</p> 
    <div class="time">
      <img class="time-Image" src="images/icon-clock.svg" alt="ETH-Image">
      <p>3 days left</p> 
    </div>
    </div>
    <hr>
    <div class="creator">
      <img src="images/image-avatar.png" alt="image-avatar">
      <p style="font-weight:400;">Creation of <span>Jules Wyvern</span> </p> 
    </div>
  </div>  
  </div>

```
```css

body{
    background-color: hsl(217, 54%, 11%);
    text-align: left;
    font-family: 'Outfit', sans-serif;
}
p{
    font-size: 12px;
    color: hsl(215, 51%, 70%);
    font-weight: 300;
}
h2{
    font-size: 15px;
    margin: 0;
    margin-top: 10px;
    font-style: normal;
    font-weight: 600;
}
/*Main Content*/
.background{
    width: 250px;
    height: 400px;
    border-radius: 10px;
    background-color:  hsl(216, 50%, 16%);
    margin: auto;
    margin-top: 200px;
    box-shadow: 0px 10px hsla(0, 0%, 0%, 0.1);

}
.background  hr{
    width: 80%;
    height: 1px;
    border-style: none;
    background-color: hsl(215, 32%, 27%);
}
.image img{
    width: 80%;
    border-radius: 5px;
    margin: 15px 25px 0 25px;
}
.info{
    width: 80%;
    margin: auto;
}
.info h2{
    color: hsl(0, 0%, 100%);
}
.price{
    width: 80%;
    margin: auto;
    position: relative;
}
.price p{
    display: inline-block;
}
.ETH{
    color: hsl(178, 100%, 50%);
}
.ETH-Image{
    width: 5%;
    padding-right: 5px;
    position: relative;
    top: 2.5px;
}
.time{
    position:absolute;
    right: 0;
    top: 0;
}
.time-Image{
    width: 20%;
    position: relative;
    top: 2.5px;
}
.creator{
    width: 80%;
    margin: auto;
}
.creator img{
    float: left;
    width: 10%;
    margin-right: 10px;
    border: 1px solid white;
    border-radius: 100%;
}
.creator p{
    padding-top: 3px;
}
span{
    color: white;
}

```

## Author

- Website - [Amjad](https://amjad12-10.github.io/Amjad-Personal-Site/)
- Frontend Mentor - [@Amjad12-10](https://www.frontendmentor.io/profile/Amjad12-10)
- Twitter - [@Amjad12_10](https://www.twitter.com/Amjad12_10)


