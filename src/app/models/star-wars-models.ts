export class StarWarsWorld {
    private _name: string = "";
    private _climate: String = "";
    private _terrain: string = "";

    getName() {
        return this._name;
    }

    setName(val: string) {
        this._name = val;
        return this;
    }

    getClimate() {
        return this._climate;
    }

    setClimate(val: String) {
        this._climate = val;
        return this;
    }

    getTerrain() {
        return this._terrain;
    }

    setTerrain(val: string) {
        this._terrain = val;
        return this;
    }

    public hydrate(data: any) {
        this._name = data.name;
        this._climate = data.climate;
        this._terrain = data.terrain
    }
}

export class StarWarsCharacter {
    private _id: string = "";
    private _name: string = "";
    private _gender: string = "";
    private _height: number = 0;
    private _mass: number = 0;
    private _homeworld: StarWarsWorld | null = null;

    getId() {
        return this._id
    }

    setId(val: string) {
        this._id = val;
        return this;
    }

    getName() {
        return this._name;
    }

    setName(val: string) {
        this._name = val;
        return this;
    }

    getGender() {
        return this._gender;
    }

    setGender(val: string) {
        this._gender = val;
        return this;
    }

    getHeight() {
        return this._height;
    }

    setHeight(val: number) {
        this._height = val;
        return this;
    }

    getMass() {
        return this._mass;
    }

    setMass(val: number) {
        this._mass = val;
        return this;
    }

    getHomeworld() {
        return this._homeworld;
    }

    setHomeworld(val: StarWarsWorld | null) {
        this._homeworld = val;
        return this;
    }

    private getIdFromUrl(url: string) {
        const temp = url.substr(0, url.length - 1);
        const pos = temp.lastIndexOf("/");
        return temp.substr(pos + 1);
    }

    public hydrate(data: any) {
        this._name = data.name;
        this._height = data.height;
        this._mass = data.mass;
        this._gender = data.gender;
        this._id = this.getIdFromUrl(data.url);
    }

}