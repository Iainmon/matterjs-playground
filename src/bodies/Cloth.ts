import { Body, Composites } from 'matter-js'
import BodyObject from './BodyObject'
import Location from '../structures/Location'

class Cloth extends BodyObject {

    public static clothGridColumns: number = 10;
    public static clothGridRows: number = 10;
    public static clothIntersectionSphereRadius: number = 5;
    public static clothGridGap: number = 1;

    public static clothStiffness: number = 0.1;
    public static clothIntersectionSphereFriction: number = 0.00001;

    public static renderWithIntersectionSpheres: boolean = true;

    public static cloth: any;

    public static initialize(location: Location) {
        Cloth.location = location;
    }

    public static create(): any {
        var group = Body.nextGroup(true); // Creates a non-coliding group
        let particleOptions = {
            friction: Cloth.clothIntersectionSphereFriction,
            collisionFilter: { group: group },
            render: { visible: Cloth.renderWithIntersectionSpheres }
        };

        Cloth.cloth = Composites.softBody(
            Cloth.location.x,
            Cloth.location.y,
            Cloth.clothGridColumns,
            Cloth.clothGridRows,
            Cloth.clothGridGap,
            Cloth.clothGridGap,
            false,
            Cloth.clothIntersectionSphereRadius,
            particleOptions,
            {
                stiffness: Cloth.clothStiffness
            });

        return Cloth.cloth;

    }
}

export default Cloth;