
const validate = (values) => {
    let formErrors = {};
    if (!values.firstName) {
        formErrors.firstName = "Please enter your first name";
    } else if (values.firstName.length < 3) {
        formErrors.firstName = "First name should be atleast 3 characters";
    }

    if (!values.lastName) {
        formErrors.lastName = "Please enter your last name";
    } else if (values.lastName.length < 3) {
        formErrors.lastName = "Last name should be atleast 3 characters";
    }

    if (!values.email) {
        formErrors.email = "Please enter your email address";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        formErrors.email = "Invalid email id"
    }


    var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if (!values.password) {
        formErrors.password = "Please enter your password";
    } else if (!(values.password.match(pass))) {
        formErrors.password = "Inavlid Password! Password should be between 8-15 characters with atleast one lowercase letter, one uppercase letter, one numeric digit and one special charcater"
    }
    return formErrors;
}

export default validate;
