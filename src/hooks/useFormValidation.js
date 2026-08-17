import { useState } from 'react';

export function useFormValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => (previous[name] ? { ...previous, [name]: '' } : previous));
  };

  const validate = (rules) => {
    const nextErrors = {};

    Object.entries(rules).forEach(([field, rule]) => {
      const value = values[field];
      if (rule.required && !value?.trim()) {
        nextErrors[field] = rule.required;
        return;
      }

      const minLength = typeof rule.minLength === 'object' ? rule.minLength.value : rule.minLength;
      if (minLength && value.length < minLength) {
        nextErrors[field] = rule.minLength.message || `Must be at least ${minLength} characters`;
        return;
      }

      const maxLength = typeof rule.maxLength === 'object' ? rule.maxLength.value : rule.maxLength;
      if (maxLength && value.length > maxLength) {
        nextErrors[field] = rule.maxLength.message || `Must be less than ${maxLength} characters`;
        return;
      }

      const pattern = rule.pattern instanceof RegExp ? rule.pattern : rule.pattern?.value;
      if (pattern && value && !pattern.test(value)) {
        nextErrors[field] = rule.pattern?.message || rule.patternMessage || 'Invalid format';
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, validate, resetForm };
}
