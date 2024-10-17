
export class Food {
    constructor(private _name: string, private _image: string) {
    }

    public get name() {
        return this._name
    }

    public get image() {
        return this._image
    }
}




