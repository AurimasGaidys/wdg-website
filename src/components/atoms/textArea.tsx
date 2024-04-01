import { Field, FieldProps } from "formik";

import React from "react";

interface Props {
  fieldName: string;
  id: string;
  name: string;
  placeholder: string;
  className: string;
}

export const MyFormikTextareaField = ({
  id,
  placeholder,
  fieldName,
  className,
}: Props) => {
  return (
    <Field name={fieldName}>
      {({ field, form, meta }: FieldProps<any>) => {
        return (
          <textarea
            placeholder={placeholder}
            name={fieldName}
            id={id}
            className={className}
            value={field.value}
            onChange={field.onChange}
          />
        );
      }}
    </Field>
  );
};
