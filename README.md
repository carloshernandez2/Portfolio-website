# Project Name

> Portfolio website Carlos.

## Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Features](#features)
  - [Status](#status)
  - [Inspiration](#inspiration)
  - [Contact](#contact)

## General info

The purpose of the proyect is to use flexbox and grid to design and build the layout for a Portfolio website.

## Technologies

- CSS flexbox
- CSS grid
- HTML

## Setup

[Home page in GitHub Pages](https://carloshernandez2.github.io/Portfolio-website/)

## Code Examples

Example of usage:

```javascript
const change = (evt) =>{
    let image = document.getElementById("image"); 
    let alt = document.getElementById("image"); 
    let paragraph = document.getElementById("paragraph");
    let header = document.getElementById("header");
    switch (evt.target.innerHTML) {
        case "Sobre mí":
            image.src = "./Images/anonymous.jpg";
            paragraph.innerHTML = sobremi;
            header.innerHTML = "Sobre mí";
            alt.alt = "mi imagen";
            return false;
        case "Proyecto 1":
            image.src = "./Images/AI.jpg";
            paragraph.innerHTML = proyecto1;
            header.innerHTML = "Proyecto 1";
            alt.alt = "mi primer proyecto";
            return false;
        case "Proyecto 2":
            image.src = "./Images/contactUsNow.jpg";
            paragraph.innerHTML = proyecto2;
            header.innerHTML = "Proyecto 2";
            alt.alt = "mi segundo proyecto";
            return false;
        case "Contáctame":
            image.src = "./Images/pryecto2.jpg";
            paragraph.innerHTML = contactanos;
            header.innerHTML = "contáctame";
            alt.alt = "datos de contacto";
            return false;
        default:
            return false;
    }
}
```

## Features

List of features:

- Responsive homepage
- Grid layout
- Flexbox layout

## Status

Project is: Finished.

## Inspiration

I was motivated by the idea of a fictional Portfolio website.

## Contact

Created by [@CarlosHernández](https://linkedin.com/in/carlos-manuel-hernández-consuegra-42975a189) - feel free to contact me!
