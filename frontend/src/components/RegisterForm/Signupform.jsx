import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Слишком короткое имя!')
    .max(10, 'Слишком длинное имя!')
    .required('Обязательное поле'),
  surname: Yup.string()
    .min(2, 'Слишком короткое фамилие!')
    .max(10, 'Слишком длинное фамилие!')
    .required('Обязательное поле'),
  email: Yup.string()
    .email('Неверный email адрес')
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .required('Обязательное поле'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Обязательное поле'),
});

const register = async (obj) => {
  try {
    let response = await axios.post("http://ashabars.beget.tech/api/register", {...obj});
    console.log(response.data);
    console.log({...obj})
    // Действия после успешной регистрации, например, перенаправление или отображение сообщения
  } catch (error) {
    console.error(`Ошибка регистрации:`, error);
    // Обработка ошибок, например, отображение сообщения об ошибке
  }
}

const SignupForm = () => (
  <div className=" max-w-md mt-[10%] mx-auto bg-white shadow-xl

  p-5 py-10  rounded-[20px]">
   <Link to="/" className="font-bold text-[20px] text-end text-indigo-600 hover:text-indigo-500 mb-6">Назад</Link>
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={SignupSchema}

      onSubmit={async (values, { setSubmitting }) => {
        await register(values);
        
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Имя</label>
            <Field name="name" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Фамилия</label>
            <Field name="surname" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="surname" component="div" className="text-red-500 text-xs mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Field name="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Пароль</label>
            <Field name="password" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Подтвердите пароль</label>
            <Field name="confirmPassword" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
            <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-2" />
          </div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
           <Link to="/works">Регистрация </Link> 
          </button>
          <p className="mt-2 text-center text-sm text-gray-600">
            Уже есть аккаунт? 
            <Link to='/loginForm' className="font-medium text-indigo-600 hover:text-indigo-500">
              Войти
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignupForm;
