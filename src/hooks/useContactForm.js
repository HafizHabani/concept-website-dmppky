import { useState } from "react";

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  company: "",
  message: "",
};

/**
 * Controlled form state for the contact section.
 * Submission is a stub — wire `onSubmit` up to a real endpoint later.
 */
export function useContactForm(onSubmit) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit?.(values);
    setStatus("sent");
    setValues(INITIAL_VALUES);
  }

  return { values, status, handleChange, handleSubmit };
}
