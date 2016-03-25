(function (root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  Asteroids.Game = function (dimX, dimY) {
    this.DIM_X = dimX;
    this.DIM_Y = dimY;
    this.NUM_ASTEROIDS = 5;
    this.asteroids = [];
    this.bullets = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship( {pos: this.randomPos(), game: this} );
  };

  Asteroids.Game.prototype.randomPos = function () {
    var pos = [this.DIM_X * Math.random(), this.DIM_Y * Math.random()];
    return pos;
  };

  Asteroids.Game.prototype.addAsteroids = function () {
    for (i = 0; i < this.NUM_ASTEROIDS; i ++) {
      var position =  this.randomPos();
      var newAsteroid = new Asteroids.Asteroid( {pos: position, game: this });
      this.asteroids.push(newAsteroid);
    }
  };

  Asteroids.Game.prototype.addBullet = function (bullet) {
    this.bullets.push(bullet);
  };

  Asteroids.Game.prototype.allObjects = function () {
    return this.asteroids.concat(this.bullets, [this.ship]);
  };

  Asteroids.Game.prototype.draw = function (ctx) {
    this.allObjects().forEach(function (el) {
      el.draw.call(el, ctx);
    });
  };

  Asteroids.Game.prototype.moveObjects = function () {
    this.allObjects().forEach(function (el) {
      el.move.call(el);
    });
  };

  Asteroids.Game.prototype.isOutOfBounds = function (pos) {
    if ((pos[0] < 0) || (pos[1] < 0) || (pos[0] > this.DIM_X) || (pos[1] > this.DIM_Y)) {
      return true;
    } else {
      return false;
    }
  };

  Asteroids.Game.prototype.wrap = function (pos) {
    if (pos[0] < 0) {
      pos[0] += this.DIM_X;
    }
    if (pos[1] < 0) {
      pos[1] += this.DIM_Y;
    }
    if (pos[0] > this.DIM_X) {
      pos[0] -= this.DIM_X;
    }
    if (pos[1] > this.DIM_Y) {
      pos[1] -= this.DIM_Y;
    }
    return pos;
  };

  Asteroids.Game.prototype.checkCollisions = function () {
    for (var i = 0; i < this.allObjects().length; i++) {
      for (var j = i+1; j < this.allObjects().length; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    }
  };

  Asteroids.Game.prototype.step = function () {
      this.moveObjects();
      this.checkCollisions();
  };

  Asteroids.Game.prototype.remove = function (object) {
    var i;
    if (object instanceof Asteroids.Asteroid) {
      i = this.asteroids.indexOf(object);
      this.asteroids.splice(i, 1);
    } else if (object instanceof Asteroids.Bullet) {
      i = this.bullets.indexOf(object);
      this.bullets.splice(i, 1);
    }
  };




})(this);















//
