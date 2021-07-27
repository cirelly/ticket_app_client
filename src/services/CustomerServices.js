import API from '../config/backApi'


export const addCustomer = async customer => {
    
        try {
            const response = await API.post('/add-customer', customer);
          
            
        } catch (error) {
            console.log(error);
            throw error
        }
    
}

export const getCustomers = async ()=>{
  
        try {
            return await API.get('/get-customers');
           
            
        } catch (error) {
            console.log(error);
            throw error
        }
    
}
