import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';



;(function() {

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

  AlwaysOnBeat.prototype = {
    update: function() {
      var self = this;

      for (var i = 0; i < this.bodies.length; i++) {
        this.bodies[i].update();
      }


    },

    draw: function(screen, gameSize) {
      screen.clearRect(0, 0, gameSize.x, gameSize.y);

      for (var i = 0; i < this.bodies.length; i++) {
        drawRect(screen, this.bodies[i]);
      }
    },
  };

  var Player = function(game, gameSize) {
    this.game = game;
    this.size = {x: 15, y: 15};
    this.center = {x: gameSize.x / 2, y: gameSize.y / 2 - this.size.y * 2};
    
    this.keyboarder = new Keyboarder();


  };

  Player.prototype = {
    update: function() {
      if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {

        this.center.x -= 2;

      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {

        this.center.x += 2;

      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
        
        this.center.y -= 2;

      } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {

        this.center.y += 2; 
      }  
    },
  };


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

    this.KEYS = { LEFT: 37, RIGHT: 39};
  };

  var drawRect = function(screen, body) {
    screen.fillRect(body.center.x - body.size.x / 2,
      body.center.y - body.size.y / 2, body.size.x, body.size.y);
  };

  window.onload = function() {
    new AlwaysOnBeat('screen');
  };

})();







