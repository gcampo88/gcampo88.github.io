(function (root) {

 var Asteroids = root.Asteroids = root.Asteroids || {};

 Asteroids.Ship = function (argsHash) {
   argsHash.vel = [0, 0];
   argsHash.color = "#F5D04C";
   argsHash.radius = 10;
   Asteroids.MovingObject.call(this, argsHash);
 };

 Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

 Asteroids.Ship.prototype.relocate = function () {
   this.pos = this.game.randomPos();
   this.vel = [0, 0];
 };

 Asteroids.Ship.prototype.power = function (impulse) {
   this.vel = [this.vel[0] + impulse[0],
     this.vel[1] + impulse[1]];
 };

 Asteroids.Ship.prototype.fireBullet = function () {
   var newBullet = new Asteroids.Bullet( {pos: this.pos,
     vel: this.bulletVel(), game: this.game});
   this.game.addBullet(newBullet);
 };

 Asteroids.Ship.prototype.bulletVel = function () {
  var velocityMagnitude = Math.sqrt(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1],2));
  var unitVelocity = [this.vel[0] / velocityMagnitude, this.vel[1] / velocityMagnitude];
  return [unitVelocity[0] * 10, unitVelocity[1] * 10];
 };


})(this);
















//
