import axios from "axios"

const commnApi = async(reqmethod,requrl,reqdata)=>{

    return await axios({
        method:reqmethod,
        url:requrl,
        data:reqdata
    })
}

export default commnApi