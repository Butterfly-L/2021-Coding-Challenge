const data = [
    // TODO: 1.第一個字大寫，2. tips 3.兩個demo link
{
    title: 'Day0 SCSS Intro',
    tag: ['CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10259186',
    demoLink: ''
},
{
    title: 'Day0 Why Do Websites Need Web Animation?',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10264391',
    demoLink: ''
},
{
    title: 'Day1 Hover Links With Animation (CSS Pseudo-classes)',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10265298',
    demoLink: 'https://codepen.io/rachel-liaw/pen/eYWPEbw?editors=1100'
},
{
    title: 'Day2 Button Animation (CSS Transform)',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10266233',
    demoLink: 'https://codepen.io/rachel-liaw/pen/WNGRbyY?editors=1100'
},
{
    title: 'Day3 Typing Effect (CSS Animation)',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10266819',
    demoLink: 'https://codepen.io/rachel-liaw/pen/gOWQZRM'
},
{
    title: 'Day4 Image Hover Effect (CSS Filter)',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10268387',
    demoLink: 'https://codepen.io/rachel-liaw/pen/dyWrVzy?editors=1100'
},
{
    title: 'Day5 Blob Animation',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10268558',
    demoLink: 'https://codepen.io/rachel-liaw/pen/vYmPraG?editors=1100'
},
{
    title: 'Day6 Infinite Text Scrolling Effect',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10268962',
    demoLink: 'https://codepen.io/rachel-liaw/pen/wvdbrKB?editors=1100'
},
{
    title: 'Day7 Animate Hamburger Menus',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10269809',
    demoLink: 'https://codepen.io/rachel-liaw/pen/QWvXzZR'
},
{
    title: 'Day8 Animate Your Menu',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10271116',
    demoLink: 'https://codepen.io/rachel-liaw/pen/powzMYq'
},
{
    title: 'Day9 Animate Numbers',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10271838',
    demoLink: 'https://codepen.io/rachel-liaw/pen/gOROQxJ?editors=0010'
},
{
    title: 'Day10 Add Dark Mode to Your Website',
    tag: ['HTML', 'CSS', 'SCSS'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10272469',
    demoLink: 'https://codepen.io/rachel-liaw/pen/abwJbPG?editors=0110'
},
{
    title: 'Day11 Scroll Animation (JS: scrollTo & scrollBy)',
    tag: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10273294',
    demoLink: 'https://codepen.io/rachel-liaw/pen/vYZXdRQ'
},
{
    title: 'Day12 Animate On Scroll (Intersection Observer API)',
    tag: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10273923',
    demoLink: 'https://codepen.io/rachel-liaw/pen/vYZXdRQ'
},
{
    title: 'Day13 Hide Your Navbar & Change It\'s Color!',
    tag: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10274568',
    demoLink: 'https://codepen.io/rachel-liaw/pen/RwggVQG'
},
{
    title: 'Day14 Confetti Animation',
    tag: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10275386',
    demoLink: './dist/pages/14-Confetti.html'
},
{
    title: 'Day15 Page Progress Bar',
    tag: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'SVG'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10275336',
    demoLink: 'https://codepen.io/rachel-liaw/pen/qBjmEZJ'
},
{
    title: 'Day16 Gooey Waterdrop Loading Animation',
    tag: ['HTML', 'CSS', 'SCSS', 'SVG'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10275895',
    demoLink: 'https://codepen.io/rachel-liaw/pen/ExXVRNG'
},
{
    title: 'Day17 Animate Your Logo On Website',
    tag: ['HTML', 'CSS', 'SCSS', 'SVG'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10276036',
    demoLink: 'https://codepen.io/rachel-liaw/pen/ExXPRaL?editors=1000'
},
{
    title: 'Day18- Handwriting Animation(SVG)',
    tag: ['HTML', 'CSS', 'SCSS', 'SVG'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10277462',
    demoLink: 'https://codepen.io/rachel-liaw/pen/RwVeVKM?editors=1100'
},
{
    title: 'Day19- Video Text & Parallax When Scroll',
    tag: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10277860',
    demoLink: 'https://codepen.io/rachel-liaw/pen/eYRzLKN?editors=1010'
},
{
    title: 'Day20- Scroll With Path! Did You See My Cat?',
    tag: ['HTML', 'CSS', 'SCSS','JavaScript', 'SVG'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10278284',
    demoLink: 'https://codepen.io/rachel-liaw/pen/zYzQLoB?editors=1010'
},
{
    title: 'Day21- Canvas Particles Effect',
    tag: ['Canvas', 'JavaScript'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10278885',
    demoLink: 'https://codepen.io/rachel-liaw/pen/abwdKzK?editors=0010'
},
{
    title: 'Day22 Bye, GIF! Make Animation with SpriteSheet!',
    tag: ['CSS', 'Canvas', 'JavaScript'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10279291',
    // demoLink: './dist/pages/cssSprite.html',
    demoLink: './dist/pages/canvasSprite.html'
},
{
    title: 'Day23 Use Canvas to Make Google Dinosaur Game!',
    tag: ['JavaScript', 'Canvas'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10279610',
    demoLink: './dist/pages/canvasGame.html'
},
{
    title: 'Day24 Cool Music Player With Animation!(Web Audio API)',
    tag: ['JavaScript', 'Canvas'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10280021',
    demoLink: './dist/pages/canvasSound.html'
},
{
    title: 'Day25 Animate Your Barchart With D3.js',
    tag: ['D3.js'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10280536',
    demoLink: 'https://codepen.io/rachel-liaw/pen/ZEKwOEE'
},
{
    title: 'Day26 Animate Pie Graph (D3.js Interpolate)',
    tag: ['D3.js'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10280876',
    demoLink: 'https://codepen.io/rachel-liaw/pen/BaRbaGb?editors=1010'
},
{
    title: 'Day27 Make An Interactive Line Graph',
    tag: ['D3.js'],
    readLink: 'https://ithelp.ithome.com.tw/articles/10281206',
    demoLink: 'https://codepen.io/rachel-liaw/pen/XWgzLQw?editors=0010'
},
]

export {data};