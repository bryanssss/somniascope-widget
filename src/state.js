// src/state.js

import { useState } from 'react';

// Custom hook for managing form data and UI state
export function useFormState(initialValues = {}) {
    const [formData, setFormData] = useState(initialValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (submitFunction) => {
        setIsSubmitting(true);
        try {
            await submitFunction(formData);
            setFormErrors(null);
        } catch (error) {
            setFormErrors(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        isSubmitting,
        formErrors,
        handleChange,
        handleSubmit,
    };
}