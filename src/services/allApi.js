import axios from "axios";
import commnApi from "./commonApi";
import baseurl from "./baseurl";


export const addTaskApi = async(data)=>{

  return  await commnApi("POST",`${baseurl}/addtask`,data)
}

