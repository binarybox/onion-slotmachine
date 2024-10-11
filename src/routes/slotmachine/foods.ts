
export class Preparation {
    constructor(private _name: string) {
    }

    public get name() {
        return this._name
    }
}
export class Food {
    constructor(private _name: string) {
    }

    public get name() {
        return this._name
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

    public random_spice() {
        const spice_index = Math.floor(Math.random() * this._spices.length)
        return this._spices[spice_index]
    }
}

export class BaseFood extends Food {

    constructor(name: string) {
        super(name);
    }
}

export const base_food = [
    new BaseFood("Kartoffeln"),
    new BaseFood("Reis"),
    new BaseFood("Nudeln"),
    new BaseFood("Linsen"),
    new BaseFood("Maultaschen"),
    new BaseFood("Gnocci"),
]

export const protein = [
    new Food("Sojaflocken"),
    new Food("Tofu"),
    new Food("rote Bohnen"),
    new Food("Kickererbsen"),
    new Food("Quinoa"),
]

export const vegtables = [
    new Food("Zuchinni"),
    new Food("Kürbis"),
    new Food("Rotebeete"),
    new Food("Rosenkohl"),
    new Food("Stangenbohnen"),
    new Food("Mangold"),
    new Food("Spinat"),
    new Food("Brokoli"),
    new Food("Spitzkohl"),
    new Food("Pilze"),
    new Food("Karotten"),
    new Food("Paprika"),
    new Food("Blumenkohl"),
]

export const sauces = [
    new Sauce("Sahne", [new Spice("Kreuzkümmel"), new Spice("Muskatnuss")]),
    new Sauce("Tomate", [new Spice("Chilli"), new Spice("Paprika")]),
    new Sauce("Kokosnusmilch", [new Spice("Kreuzkümmel"), new Spice("Koriander")]),
    new Sauce("Brühe", [new Spice("Kreuzkümmel"), new Spice("Koriander")]),
    new Sauce("Nichts", [new Spice("Kreuzkümmel"), new Spice("Koriander")]),
]

export const preparations = [
    new Preparation("Kochen"),
    new Preparation("Backen"),
    new Preparation("Braten"),
]