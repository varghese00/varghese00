import {writable} from "svelte/store";



export const user = writable({
  email: "",
  token: "",
//   userId:"",
});
