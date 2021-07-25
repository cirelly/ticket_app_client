
const validationRegister = ({ required = false, minLength = false, maxLength = false }) => {


    let register = {};

    if (required) {
        register = {
            ...register,
            required : "Este campo no puede estar vacío"
        }
    }


    if (minLength) {
        register = {
            ...register,
            minLength : {
                value : minLength,
                message : `Este campo no puede tener menos de ${minLength} carácteres`
            }
        }
    }


    if (maxLength) {
        register = {
            ...register,
            maxLength : {
                value : maxLength,
                message : `Este campo no puede tener más de ${maxLength} carácteres`
            }
        }
    }


    return register;

}




export default validationRegister;