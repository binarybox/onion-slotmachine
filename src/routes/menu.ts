import { carbs_list } from "./carbs"
import { preparation_list } from "./preparation"
import { protein_list } from "./protein"
import { sauces_list } from "./sauce"
import { vegtables_list } from "./vegtable"

export class Menu {
    private carbs_index: number
    private protein_index: number
    private vegetable_index: number
    private sauce_index: number
    private spice_index: number
    private preparation_index: number

    public get carbs() {
        return this.carbs_index
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
        this.carbs_index = Math.floor(Math.random() * carbs_list.length);
        this.protein_index = Math.floor(Math.random() * protein_list.length)
        this.vegetable_index = Math.floor(Math.random() * vegtables_list.length)
        this.sauce_index = Math.floor(Math.random() * sauces_list.length)
        this.preparation_index = Math.floor(Math.random() * preparation_list.length)
        this.spice_index = sauces_list[this.sauce_index].random_spice_index()
    };

}
