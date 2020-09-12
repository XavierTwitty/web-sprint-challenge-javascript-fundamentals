// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attrs) {
//   this.cubeLength = attrs.cubeLength;
//   this.width = attrs.width;
//   this.height = attrs.height;
// }

class CuboidMaker2 {
  constructor(elements) {
    this.cubeLength = elements.cubeLength;
    this.width = elements.width;
    this.height = elements.height;
  }
  volume() {
    return this.cubeLength * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.cubeLength * this.width +
        this.cubeLength * this.height +
        this.width * this.height)
    );
  }
}

// CuboidMaker.prototype.volume = function () {
//   return this.cubeLength * this.width * this.height;
// };

// CuboidMaker.prototype.surfaceArea = function () {
//   return (
//     2 *
//     (this.cubeLength * this.width +
//       this.cubeLength * this.height +
//       this.width * this.height)
//   );
// };

const cuboid2 = new CuboidMaker2({
  cubeLength: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
