import { useState } from "react";
import validate from "./validate";

const useForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    // setIsSubmitting(true);
    setValues({
      email: "",
      password: ""
    });
  };
  // console.log(values)
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
