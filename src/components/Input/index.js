import React from "react";
import { ErrorMessage } from "formik";
import { Input as ContainerInputs, Label, Error } from "./styles";

function Input({ name, label, required, children, ...props }) {
    return (
        <div>
            <Label>
                {label || name}
            </Label>
            <ContainerInputs name={name} {...props}>{children}</ContainerInputs>
            {<ErrorMessage name={name} component={Error} />}
        </div>

    )
}

export default Input