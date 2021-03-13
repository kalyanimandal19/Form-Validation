import { useState, useEffect } from 'react';

const useForm = (callback, initialValues, validate) => {
    const [values, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            callback();
        }
    }, [formErrors]);

    const handleSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }
        setIsSubmitting(true);
        setFormErrors(validate(values));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return {
        handleChange,
        handleSubmit,
        values,
        formErrors
    }
}

export default useForm;
