import API from '../config/backApi'


export const addCustomer = async customer => {
    
        try {
            const response = await API.post('/add-customer', customer);
            console.log(response);
            
        } catch (error) {
            console.log(error);
        }
    
}

export const getCustomers = async ()=>{
  
        try {
            return await API.get('/get-customers');
           
            
        } catch (error) {
            console.log(error);
        }
    
}
export const getAttendedCustomer = async ()=>{
  
    try {
        return await API.get('/get-queue');
       
        
    } catch (error) {
        console.log(error);
    }

}