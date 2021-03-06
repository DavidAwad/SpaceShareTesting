/* Headless Testing Module using CasperJS */

/* create casper and add mouse module*/
var casper = require('casper').create();
var mouse = require("mouse").create(casper);
var space = Math.floor ( Math.random() * 100 ) ;
/* take screenshots from within Javascript! */
casper.options.viewportSize = {width: 1024, height: 768};

casper.start("http://spaceshare.me", function(){

console.log('Opened page with title \"' + this.getTitle() + '"');
    this.options.waitTimeout = 30000;
    this.fill('form#create-form', {
        'space':   space,
        'file':   'file.txt' , /* attempt to upload any generic file */
    }, true);

    this.mouse.click('#create-button');
    /* screenshot taken! */
    casper.capture( pass+".png" );
}).run();

console.log("upload successful to space :" + space );
