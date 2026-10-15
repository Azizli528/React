import axios, { create } from "axios" ;

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com" ,
    timeout:10000 ,
    headers: {
        "Content-Type" : "application/json",
    },
}) ;

api.interceptors.request.use((config)=>{
const token = localStorage.getItem("token")

if(token) {
    config.headers.Authorization = `Bearer ${token}` ;
}

return config
},(error)=>{
   return Promise.reject(error)
}) ;

api.interceptors.request.use((response)=>{
    return response.data
} ,(error)=>{
    if(axios.isCancel(error)){
        return Promise.reject(error)
    }

    const {response} = error

    if(error.code ==="ECONNABORTED"){
        error.message = "Sorgunuzun vaxti bitdi , yeniden cehd edin."
    }
    else if(!response){
        error.message = "sebeke xetasi , internet baglantisini yoxla."
    }
    else{
        switch (response.status) {
            case 401:
                error.message = "Authorizasia xetasi"
                break;
            case 404:
                error.message = "Melumat tapilmadi."
               break;
            case 500:
                error.message = "Server xetasi."
                break;
            default:
                error.message = "xeta bas verdi."
                break;
        }

    }
    return Promise.reject(error)
},)

export const isCancel = axios.isCancel;


export const userService = {
    getUsers: (params={} , config={})=>{
        api.get("/users", {...config,params:{...params}});
    },
    getUserById:(id , config={})=>{
        api.get(`/users/${id}` , config);
    },
    createUser: (userData , config)=>{
        api.post("/users",userData,config);
    },
    updateUser: (id , updateData,config ={})=>{
        api.patch(`users/${id}`,updateData,config);
    },
    deleteUser: (id , config={})=>{
        api.delete(`users/${id}`,config);
    },
};

export default api;