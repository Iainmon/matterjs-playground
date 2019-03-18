import { Body, Composites } from 'matter-js'

// Location
const location = {
    x: 200,
    y: 200
};

// Grid values
const clothGridColumns = 10;
const clothGridRows = 10;
const clothIntersectionSphereRadius = 5;
const clothGridGap = 1;

// Properties
const clothStiffness = 0.1;
const clothIntersectionSphereFriction = 0.00001;

// Options
const renderWithIntersectionSpheres = true;


var group = Body.nextGroup(true); // Creates a non-coliding group
var particleOptions = {
    friction: clothIntersectionSphereFriction,
    collisionFilter: { group: group },
    render: { visible: renderWithIntersectionSpheres }
};
const constraintOptions = { stiffness: clothStiffness };

var cloth = Composites.softBody(location.x, location.y, clothGridColumns, clothGridRows, clothGridGap, clothGridGap, false, clothIntersectionSphereRadius, particleOptions, constraintOptions);

// for (var i = 0; i < clothGridColumns; i++) {
//     cloth.bodies[i].isStatic = true;
// }

export default cloth;