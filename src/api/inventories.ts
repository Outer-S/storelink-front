import { TokenizedInstance} from './axios'
import {Inventory} from './types'

export const createInventory = async function(inventory:Inventory,token:string){
    const TokenizedApi = TokenizedInstance(token);
    let db_inventory = (await TokenizedApi.post("/inventories/create_inventory",inventory)).data
    return db_inventory
}
