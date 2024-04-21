import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Неверный email адрес')
    .required('Обязательное поле'),
});

const ResetPasswordForm = () => (
  
  <div className="max-w-md mt-[10%] mx-auto bg-white shadow-xl  p-5 py-10  rounded-[20px]">
    <Link to="/" className="font-bold text-[20px] text-end text-indigo-600 hover:text-indigo-500 mb-6">Назад</Link>
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ResetPasswordSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Здесь должен быть вызов API для сброса пароля
        alert('Инструкции по сбросу пароля отправлены на ваш email: ' + values.email);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email для сброса пароля</label>
            <Field
              name="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xs mt-2"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          
            Отправить
            
          </button>
        </Form>
      )}
    </Formik>
    <div className="mt-4 text-center">
      <p className="font-medium text-indigo-600 hover:text-indigo-500">Вернуться к входу</p>
    </div>
  </div>
);

export default ResetPasswordForm;
