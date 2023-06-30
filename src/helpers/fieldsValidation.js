export const fieldsValidation = (fieldsObject) => {
    const errors = {
        names: "",
        last_names: "",
        email: "",
        mobile_phone: "",
        id_number: "",
        err: false,
      };
    
      if (!(fieldsObject.names.length > 1)) {
        errors.names = "Ingrese sus nombres";
        errors.err = true;
      }
      if (!(fieldsObject.last_names.length > 1)) {
        errors.last_names = "Ingrese sus apellidos";
        errors.err = true;
      }

      if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldsObject.email))) {
        errors.email = "Ingrese un email valido";
        errors.err = true;
      }
   
      if (!(fieldsObject.mobile_phone.length >= 7)) {
        errors.mobile_phone = "Ingrese un numero teléfonico - minimo 7 caracteres";
        errors.err = true;
      }

      if (!(fieldsObject.id_number.length >= 7)) {
        errors.id_number = "Ingrese el numero de su documento de identidad - minimo 7 caracteres";
        errors.err = true;
      }
     
      return errors;
}