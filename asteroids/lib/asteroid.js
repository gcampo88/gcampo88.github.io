(function (root) {

 var Asteroids = root.Asteroids = root.Asteroids || {};

 Asteroids.Asteroid = function (argsHash) {
   argsHash.vel = Asteroids.Util.randomVec(2);
   argsHash.color = "#FF0000";
   argsHash.radius = Math.max((Math.random() * 30), 10);
   Asteroids.MovingObject.call(this, argsHash);
 };

 Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

 Asteroids.Asteroid.prototype.collideWith = function (otherObject) {
   if (otherObject instanceof Asteroids.Ship) {
     otherObject.relocate();
   }
   if (otherObject instanceof Asteroids.Bullet) {
     this.game.remove(this);
     this.game.remove(otherObject);
   }
 };


})(this);
