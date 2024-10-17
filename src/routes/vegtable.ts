import { Food } from "./foods";

import zuchinni_image from "$lib/icons/veg/zucchini.png"
import pumpkin_image from "$lib/icons/veg/pumpkin.png"
import red_cabbage_image from "$lib/icons/veg/red-cabbage.png"
import brussle_sprout_image from "$lib/icons/veg/brussle sprout.png"
import beans_image from "$lib/icons/veg/beans.png"
import spinach_image from "$lib/icons/veg/spinach.png"
import broccoli_image from "$lib/icons/veg/broccoli.png"
import mushroom_image from "$lib/icons/veg/mushroom.png"
import carrot_image from "$lib/icons/veg/carrot.png"
import bell_pepper_image from "$lib/icons/veg/bell-pepper.png"
import cauliflower_image from "$lib/icons/veg/cauliflower.png"

export class Vegetable extends Food {
    constructor(name: string, image: string) {
        super(name, image)
    }
}

export const vegtables_list = [
    new Vegetable("Zuchinni", zuchinni_image),
    new Vegetable("Kürbis", pumpkin_image),
    new Vegetable("Rotebeete", red_cabbage_image),
    new Vegetable("Rosenkohl", brussle_sprout_image),
    new Vegetable("Stangenbohnen", beans_image),
    // new Vegetable("Mangold", brokoli_image),
    new Vegetable("Spinat", spinach_image),
    new Vegetable("Brokoli", broccoli_image),
    // new Vegetable("Spitzkohl", brokoli_image),
    new Vegetable("Pilze", mushroom_image),
    new Vegetable("Karotten", carrot_image),
    new Vegetable("Paprika", bell_pepper_image),
    new Vegetable("Blumenkohl", cauliflower_image),
]