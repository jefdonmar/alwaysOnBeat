import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


// Function for entire game
;(function() {

  // Constructor function for canvas item
  var AlwaysOnBeat = function(canvasId) {
    var canvas = document.getElementById('screen');
    var screen = canvas.getContext('2d');
    var gameSize = {x: canvas.width, y: canvas.height};

    this.bodies = [new Player(this, gameSize)];

    var self = this;

    var tick = function() {
      self.update();
      self.draw(screen,gameSize);
      requestAnimationFrame(tick);
    };

    tick();
    console.log('Hello, World!');
  };

  // Prototype of constructor function
  AlwaysOnBeat.prototype = {
    update: function() {
      var self = this;


      for (var i = 0; i < this.bodies.length; i++) {
        this.bodies[i].update();
      }

    },

    // Draws Character item on to the screen
    draw: function(screen, gameSize) {
      screen.clearRect(0, 0, gameSize.x, gameSize.y);


      for (var i = 0; i < this.bodies.length; i++) {
        drawRect(screen, this.bodies[i]);
      }
    },
  };

  // Player constructor function 
  var Player = function(game, gameSize) {
    this.game = game;
    this.size = {x: 250, y: 250};
    this.center = { x: gameSize.x / 2, y: gameSize.y - this.size.y * 2 };
    
    this.keyboarder = new Keyboarder();
    console.log('What a beautiful Day');


  };

  // Prototype of constructor function
  Player.prototype = {

    update: function() {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT) & 
        this.center.x <= 500) {
        this.center.x = 500; 
      }      
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT) &
        this.center.x >= 250) {
        this.center.x = 250;
      } 
      if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN) &
        this.center.y >= -250) {
        this.center.y = -250;
      } 
      if (this.keyboarder.isDown(this.keyboarder.KEYS.UP) &
        this.center.y <= 0) {
        this.center.y = 0;
      } 
    },
  };

  // Constructor function for keyboard commands
  var Keyboarder = function() {
    var keyState = {};

    window.addEventListener('keydown', function(e) {
      keyState[e.keyCode] = true;
    });

    window.addEventListener('keyup', function(e) {
      keyState[e.keyCode] = false;
    });

    this.isDown = function(keyCode) {
      return keyState[keyCode] === true;
    };

    this.KEYS = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
    console.log('As long as it keeps shinning');
  };

  // Places the Players automatically in Quadrant I
  $drake = url (https://media3.giphy.com/media/unRa3ffljnuec/200.gif)
  var drawRect = function(screen, body) {
    // Quadrant I
    screen.fillStyle = $drake;
    screen.fillRect(body.center.x - body.size.x, 
      body.size.y - body.center.y - body.size.y ,
      body.size.x, body.size.y);
    
    // Quadrant II
    // screen.fillRect(body.center.x, 
    //   body.size.y - body.center.y - body.size.y ,
    //   body.size.x, body.size.y);
    
    // Quadrant III
    // screen.fillRect(body.center.x, 
    //   body.size.y - body.center.y,
    //   body.size.x, body.size.y);


    
    // Quadrant IV
    // screen.fillRect(body.center.x - body.size.x, 
    //   body.size.y - body.center.y,
    //   body.size.x, body.size.y);

  };


  // Invokes the AlwaysOnBeat constructor function once the page is loaded
  window.onload = function() {
    new AlwaysOnBeat('screen');
  };

  function newRound() {
    var sequence = [1,2,1]; // red, green, red
    animate(sequence);
  }
 
  function animate(sequence) {
    var i = 0;
    var interval = setInterval(function() {
      lightUp(sequence[i]);
     
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
      }
    }, 600);
  }

     
  function lightup(tile) {
    var $tile = $('[data-tile=' + tile + ']').addClass('lit');
    window.setTimeout(function() {
      $tile.removeClass('lit');
    }, 300);
     
  }


})();







