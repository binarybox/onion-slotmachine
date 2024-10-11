import brokoli_image from "$lib/vegetable/brokoli.jpg"


export class Preparation {
    constructor(private _name: string) {
    }

    public get name() {
        return this._name
    }
}
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

export class Vegetable extends Food {
    constructor(name: string, image: string) {
        super(name, image)
    }
}
export class Protein extends Food {
    constructor(name: string, image: string) {
        super(name, image)
    }
}

export class Spice {
    constructor(private _name: string) {
    }

    public get name() {
        return this._name
    }
}
export class Sauce {
    constructor(private _name: string, private _spices: Spice[]) {
    }

    public get name() {
        return this._name
    }

    public random_spice_index() {
        return Math.floor(Math.random() * this._spices.length)
    }

    public get_spice(index: number): Spice {
        return this._spices[index]
    }
}

export class BaseFood extends Food {

    constructor(name: string) {
        super(name, "brokoli.jpg");
    }
}

export class Menu {
    private base_index: number
    private protein_index: number
    private vegetable_index: number
    private sauce_index: number
    private spice_index: number
    private preparation_index: number

    public get base() {
        return this.base_index
    }
    public get protein() {
        return this.protein_index
    }
    public get vegetable() {
        return this.vegetable_index
    }
    public get sauce() {
        return this.sauce_index
    }
    public get spice() {
        return this.spice_index
    }
    public get preparation() {
        return this.preparation_index
    }

    constructor() {
        this.base_index = Math.floor(Math.random() * base_food_list.length);
        this.protein_index = Math.floor(Math.random() * protein_list.length)
        this.vegetable_index = Math.floor(Math.random() * vegtables_list.length)
        this.sauce_index = Math.floor(Math.random() * sauces_list.length)
        this.preparation_index = Math.floor(Math.random() * preparation_list.length)
        this.spice_index = sauces_list[this.sauce_index].random_spice_index()
    };

}

export const base_food_list = [
    new BaseFood("Kartoffeln"),
    new BaseFood("Reis"),
    new BaseFood("Nudeln"),
    new BaseFood("Linsen"),
    new BaseFood("Maultaschen"),
    new BaseFood("Gnocci"),
]

export const protein_list = [
    new Protein("Sojaflocken", "brokoli.jpg"),
    new Protein("Tofu", "brokoli.jpg"),
    new Protein("rote Bohnen", "brokoli.jpg"),
    new Protein("Kickererbsen", "brokoli.jpg"),
    new Protein("Quinoa","brokoli.jpg"),
]

export const vegtables_list = [
    new Vegetable("Zuchinni", brokoli_image),
    new Vegetable("Kürbis", brokoli_image),
    new Vegetable("Rotebeete", brokoli_image),
    new Vegetable("Rosenkohl", brokoli_image),
    new Vegetable("Stangenbohnen", brokoli_image),
    new Vegetable("Mangold", brokoli_image),
    new Vegetable("Spinat", brokoli_image),
    new Vegetable("Brokoli", brokoli_image),
    new Vegetable("Spitzkohl", brokoli_image),
    new Vegetable("Pilze", brokoli_image),
    new Vegetable("Karotten", brokoli_image),
    new Vegetable("Paprika", brokoli_image),
    new Vegetable("Blumenkohl", brokoli_image),
]

export const sauces_list = [
    new Sauce("Sahne", [new Spice("Kreuzkümmel"), new Spice("Muskatnuss")]),
    new Sauce("Tomate", [new Spice("Chilli"), new Spice("Paprika")]),
    new Sauce("Kokosnusmilch", [new Spice("Kreuzkümmel"), new Spice("Koriander")]),
    new Sauce("Brühe", [new Spice("Kreuzkümmel"), new Spice("Koriander")]),
    new Sauce("Nichts", [new Spice("Kreuzkümmel"), new Spice("Koriander")]),
]

export const preparation_list = [
    new Preparation("Kochen"),
    new Preparation("Backen"),
    new Preparation("Braten"),
]