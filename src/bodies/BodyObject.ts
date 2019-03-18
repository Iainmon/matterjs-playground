import Location from '../structures/Location'

class BodyObject {

    public location : Location;

    constructor( location : Location ) {
        
        if (!location) {
            throw 'Location was not passed as a parameter into this game object.';
        }

        this.location = location;
    }

}

export default BodyObject;