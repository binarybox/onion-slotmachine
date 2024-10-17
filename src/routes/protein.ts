import { Food } from "./foods";
import soja_image from "$lib/icons/prot/soy shreds.png"
import chickpeas_image from "$lib/icons/prot/chickpeas.png"
import quinoa_image from "$lib/icons/prot/quinoa.png"
import red_beans_image from "$lib/icons/prot/red-beans.png"
import tofu_image from "$lib/icons/prot/tofu.png"
import hazelnut_image from "$lib/icons/prot/hazelnut.png"


export class Protein extends Food {
    constructor(name: string, image: string) {
        super(name, image)
    }
}

export const protein_list = [
    new Protein("Sojaflocken", soja_image),
    new Protein("Tofu", tofu_image),
    new Protein("rote Bohnen", red_beans_image),
    new Protein("Kickererbsen", chickpeas_image),
    new Protein("Quinoa", quinoa_image),
    new Protein("Nüsse", hazelnut_image),
]