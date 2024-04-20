import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Неверный email адрес')
    .required('Обязательное поле'),
  password: Yup.string()
    .required('Обязательное поле'),
});


const LoginForm = () => (
  <div className="max-w-md mt-[10%] mx-auto bg-white shadow-xl  p-5 py-10  rounded-[20px]">
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Link to="/" className="font-bold text-[20px] text-end text-indigo-600 hover:text-indigo-500 mb-6">Назад</Link>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Field name="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль</label>
            <Field name="password" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <div className="mt-2 flex justify-between">
            <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
            <Link to="/reset-password" className="font-medium text-end text-indigo-600 hover:text-indigo-500">Забыли пароль?</Link>
          </div>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Войти
            </button>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm text-gray-600">
              Нет аккаунта? 
              <Link to='/signupForm' className="font-medium text-indigo-600 hover:text-indigo-500">
                Зарегистрироваться
              </Link>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
