import bay_leaf_image from "$lib/icons/spice/bay leaf.png"
import caraway_image from "$lib/icons/spice/caraway.png"
import chilli_pepper_image from "$lib/icons/spice/chili-pepper.png"
import cilantro_image from "$lib/icons/spice/cilantro no fill.png"
import cinnamon_image from "$lib/icons/spice/cinnamon-roll.png"
import cumin_image from "$lib/icons/spice/cumin blue outline.png"
import honey_image from "$lib/icons/spice/honey.png"
import lemon_image from "$lib/icons/spice/lemon.png"
import nutmeg_image from "$lib/icons/spice/nutmeg.png"
import turmeric_image from "$lib/icons/spice/turmeric.png"
import oregano_image from "$lib/icons/spice/oregano.png"
import paprika_image from "$lib/icons/spice/paprika.png"
import rosemary_image from "$lib/icons/spice/rosemary.png"
import thyme_image from "$lib/icons/spice/thyme.png"

export class Spice {
    constructor(private _name: string, private _image: string) {
    }

    public get name() {
        return this._name
    }

    public get image() {
        return this._image
    }
}

export const spices = {
    kreuzkuemmel: new Spice("Kreuzkümmel", cumin_image),
    koriander: new Spice("Koriander", cilantro_image),
    mustkatnuss: new Spice("Muskatnuss", nutmeg_image),
    zimt: new Spice("Zimt", cinnamon_image),
    zitronensaft: new Spice("Zitronensaft", lemon_image),
    thymian: new Spice("Thymian", thyme_image),
    kurkuma: new Spice("Kurkuma", turmeric_image),
    oregano: new Spice("Oregano", oregano_image),
    paprika: new Spice("Paprika", paprika_image),
    lorbeerblatt: new Spice("Lorbeerblatt", bay_leaf_image),
    honig: new Spice("Honig", honey_image),
    kuemmel: new Spice("Kümmel", caraway_image),
    rosmarin: new Spice("Rosmarin", rosemary_image),
    chilli: new Spice("Chilli", chilli_pepper_image),

}