(function (root) {

 var Asteroids = root.Asteroids = root.Asteroids || {};

 Asteroids.MovingObject = function (argHash) {
   this.pos = argHash.pos;
   this.vel = argHash.vel;
   this.radius = argHash.radius;
   this.color = argHash.color;
   this.game = argHash.game;
 };

 Asteroids.MovingObject.prototype.isWrappable = true;

 Asteroids.MovingObject.prototype.draw = function (ctx) {
   ctx.fillStyle = this.color;
   ctx.beginPath();

   ctx.arc(
     this.pos[0],
     this.pos[1],
     this.radius,
     0,
     2 * Math.PI,
     false
   );

   ctx.fill();
 };


 Asteroids.MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + this.vel[0],
      this.pos[1] + this.vel[1]];

    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.game.remove(this);
      }
    }

 };


 Asteroids.MovingObject.prototype.isCollidedWith = function (otherObject) {
   if (Asteroids.Util.posDistance(this.pos, otherObject.pos) <
   (this.radius + otherObject.radius)) {
     return true;
   } else {
     return false;
   }
 };

 Asteroids.MovingObject.prototype.collideWith = function (otherObject) {
  //  duck typing
 };

})(this);













//
