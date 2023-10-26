import { gql, useLazyQuery } from '@apollo/client';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { My_LoginQuery } from '../__generated__/graphql.ts';
import { authTokenVar, isLoggedInVar } from '../apollo.ts';
import FormError from '../components/FormError.tsx';
import { LOCAL_STORAGE_TOKEN } from '../constants.ts';

const LOGIN_QUERY = gql(/* GraphQL */ `
  query my_login($loginInput: LoginInput!) {
    login(input: $loginInput) {
      ok
      token
      error
    }
  }
`);

interface ILoginForm {
  usernameOrEmail: string;
  password: string;
}

const Login = () => {
  const { register, getValues, formState, handleSubmit } = useForm<ILoginForm>({
    mode: 'onChange',
  });

  const onCompleted = (data: My_LoginQuery) => {
    const {
      login: { ok, token }, // TODO: Add toast for error or success
    } = data;
    if (ok && token) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      authTokenVar(token);
      isLoggedInVar(true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginQuery, { loading: isLoading }] = useLazyQuery(LOGIN_QUERY, {
    onCompleted,
  });
  const onSubmit = () => {
    if (!isLoading) {
      const { usernameOrEmail, password } = getValues();
      loginQuery({
        variables: {
          loginInput: {
            usernameOrEmail,
            password,
          },
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-2 my-5">
      <Helmet>
        <title> Login | RPG Manager</title>
      </Helmet>
      <label htmlFor="username" className="block text-xl cursor-pointer">
        Username or Email
        <input
          {...register('usernameOrEmail', {
            required: 'Username or email is required.',
            maxLength: {
              value: 320,
              message: 'Maximum length is 320 characters.',
            },
            minLength: {
              value: 4,
              message: 'Minimum length is 4 characters.',
            },
          })}
          type="text"
          required
          minLength={4}
          maxLength={320}
          id="username"
          className="mt-1 input"
        />
      </label>
      {formState.errors.usernameOrEmail?.message && (
        <FormError errorMessage={formState.errors.usernameOrEmail?.message} />
      )}

      <label
        htmlFor="password"
        className="block text-xl capitalize cursor-pointer"
      >
        Password
        <input
          {...register('password', {
            required: 'Password is required.',
            maxLength: {
              value: 255,
              message: 'Maximum length is 255 characters.',
            },
            minLength: {
              value: 8,
              message: 'Minimum length is 8 characters.',
            },
          })}
          type="password"
          id="password"
          required
          minLength={8}
          maxLength={255}
          className="input"
        />
      </label>
      {formState.errors.password?.message && (
        <FormError errorMessage={formState.errors.password?.message} />
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="px-8 py-2 mt-6 border-green-900 rounded bg-secondary place-self-center hover:bg-secondary-600 border-x-2 disabled:bg-error-600 disabled:border-none"
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};
export default Login;
