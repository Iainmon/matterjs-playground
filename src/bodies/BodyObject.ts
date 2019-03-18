import Location from '../structures/Location'

class BodyObject {

    public static location: Location;

    public static initialize(newLocation: Location) {

        if (!newLocation) {
            throw 'Location was not passed as a parameter into this game object.';
        }

        this.location = newLocation;
    }

}

export default BodyObject;