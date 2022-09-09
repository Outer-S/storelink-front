import {FormEvent, useState} from "react";
import {createInventory} from '../api'
import {useAppSelector} from '../app'

const InventoryForm = () => {
  const [name , setName] = useState("");
  const [description,setDescription] = useState("");
  const {token} = useAppSelector((state)=>state.userReducer)

  const addInventory = async (event : FormEvent)=>{
    event.preventDefault();
    try {
      let db_inventory = await createInventory({name,description},token as string);
    }
    catch(e)
    {
      console.log(e);
      return
    }
  }
  return (
    <div className="w-full p-8 bg-white rounded-lg lg:p-12 lg:col-span-3">
      <h1 className="text-center text-3xl">Inventory Creation</h1>
      <form className="space-y-5 my-6 px-32" onSubmit={addInventory}>
        <div>
          <label className="text-grey" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 text-sm border-gray-200 rounded-lg"
            placeholder="Inventory Name"
            type="text"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-grey" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full p-3 text-sm border-gray-200 rounded-lg"
            placeholder="Description"
            rows={8}
            id="description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-blue rounded-lg sm:w-auto"
          >
            <span className="font-medium"> Create Inventory </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default InventoryForm;
