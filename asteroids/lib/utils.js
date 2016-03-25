(function (root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  Asteroids.Util = function () {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {

    var Surrogate = function () {};

    Surrogate.prototype = ParentClass.prototype;

    ChildClass.prototype = new Surrogate();

    ChildClass.prototype.constructor = ChildClass;

  };

  Asteroids.Util.randomVec = function(length) {
    var vector = [];
    for (var i = 0; i < length; i ++) {
      vector.push((5 - 10 * Math.random()));
    }

    return vector;
  };

  Asteroids.Util.posDistance = function (pos1, pos2) {
    return Math.sqrt(Math.pow((pos1[0] - pos2[0]),2) + Math.pow((pos1[1] - pos2[1]),2));
  };

})(this);
