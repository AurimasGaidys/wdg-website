"use client";

import { MyFormikTextareaField } from "@/components/atoms/textArea";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  name: string;
  message: string;
  email: string;
}

const PrivateContactUs = () => {
  return (
    <>
      <div className="relative w-full flex flex-col p-[10px] items-center">
        <div className="w-full max-w-[1152px] z-10 text-[#1C221F] space-y-[20px]">
          <Formik
            initialValues={{
              name: "",
              message: "",
              email: "",
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form className="flex flex-col w-full text-[20px]">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                placeholder="John"
                type="name"
                className="mb-[10px] p-[10px] border border-[#1C221F]"
              />

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
                className="mb-[10px] p-[10px] border border-[#1C221F]"
              />

              <label htmlFor="message">Message</label>
              <MyFormikTextareaField
                id="message"
                name="message"
                placeholder="Message.."
                className="mb-[10px] p-[10px] border border-[#1C221F]"
                fieldName={"message"}
              />

              <p className="text-[18px] text-[#7B9A98] pb-[20px]">
                This site is protected by reCAPTCHA and the Google 
                <a href="/terms-and-conditions">Privacy Policy</a> and Terms of
                Service apply.
              </p>

              <button
                className="bg-[#7B9A98] hover:bg-[#5D8E9B] w-[200px] h-[50px] mb-[20px]"
                type="submit"
              >
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default PrivateContactUs;
