import { Spice, spices } from "./spice"

import sour_cream_image from "$lib/icons/sauce/sour-cream.png"
import brew_image from "$lib/icons/sauce/brew.png"
import coconut_milk_image from "$lib/icons/sauce/coconut-milk.png"
import tomato_cream_image from "$lib/icons/sauce/tomato-cream.png"
import tomato_image from "$lib/icons/sauce/tomato.png"
import nothing_image from "$lib/icons/sauce/nothing.png"

export class Sauce {
    constructor(private _name: string, private _image: string, private _spices: Spice[]) {
    }

    public get name() {
        return this._name
    }

    public get spice_list() {
        return this._spices
    }

    public get image() {
        return this._image
    }

    public random_spice_index() {
        return Math.floor(Math.random() * this._spices.length)
    }

    public get_spice(index: number): Spice {
        return this._spices[index]
    }
}

export const sauces_list = [
    new Sauce("Sahne", sour_cream_image, [
        spices.kreuzkuemmel,
        spices.mustkatnuss,
        spices.zimt,
        spices.zitronensaft,
        spices.thymian,
        spices.kurkuma
    ]),
    new Sauce("Tomate", tomato_image, [
        spices.chilli,
        spices.paprika,
        spices.oregano,
        spices.lorbeerblatt,
        spices.honig,
        spices.rosmarin
    ]),
    new Sauce("Kokosnusmilch", coconut_milk_image, [
        spices.kreuzkuemmel,
        spices.koriander,
        spices.chilli,
        spices.mustkatnuss,
        spices.zimt,
        spices.kurkuma
    ]),
    new Sauce("Brühe", brew_image, [
        spices.koriander,
        spices.oregano,
        spices.paprika,
        spices.mustkatnuss,
        spices.thymian,
        spices.kuemmel
    ]),
    new Sauce("Tomaten/Sahne", tomato_cream_image, [
        spices.koriander,
        spices.oregano,
        spices.paprika,
        spices.mustkatnuss,
        spices.thymian,
        spices.kuemmel
    ]),
    new Sauce("Nichts", nothing_image, [
        spices.kreuzkuemmel,
        spices.koriander,
        spices.mustkatnuss,
        spices.zimt,
        spices.zitronensaft,
        spices.thymian,
        spices.kurkuma,
        spices.oregano,
        spices.paprika,
        spices.lorbeerblatt,
        spices.honig,
        spices.kuemmel,
        spices.rosmarin,
        spices.chilli
    ]),
]