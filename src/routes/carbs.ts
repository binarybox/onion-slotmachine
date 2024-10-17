import { Food } from "./foods";

import brown_rice_image from "$lib/icons/carbs/brown-rice.png"
import dumpling_image from "$lib/icons/carbs/dumpling.png"
import fusilli_image from "$lib/icons/carbs/fusilli.png"
import gnocci_image from "$lib/icons/carbs/gnocchi1.png"
import lentis_image from "$lib/icons/carbs/lentils.png"
import potato_image from "$lib/icons/carbs/potato.png"

export class Carbs extends Food {
    constructor(name: string, image: string) {
        super(name, image);
    }
}

export const carbs_list = [
    new Carbs("Kartoffeln", potato_image),
    new Carbs("Reis", brown_rice_image),
    new Carbs("Nudeln", fusilli_image),
    new Carbs("Linsen", lentis_image),
    new Carbs("Maultaschen", dumpling_image),
    new Carbs("Gnocci", gnocci_image),
]