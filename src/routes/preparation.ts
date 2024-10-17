import cooking_image from "$lib/icons/prep/chef.png"
import fry_image from "$lib/icons/prep/fry.png"
import oven_image from "$lib/icons/prep/oven.png"

export class Preparation {
    constructor(private _name: string, public image: string) {
    }

    public get name() {
        return this._name
    }
}

export const preparation_list = [
    new Preparation("Kochen", cooking_image),
    new Preparation("Backen", oven_image),
    new Preparation("Braten", fry_image),
]