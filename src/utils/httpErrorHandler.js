



const errorHandler = (response) => {


    if (response.status === 202){

        let errorMessage = response.data.message;
        throw new Error(errorMessage);

    }

}

export default errorHandler;