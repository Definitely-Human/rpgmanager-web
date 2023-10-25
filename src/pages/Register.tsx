import { useMutation } from '@apollo/client';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreateAccountMutation } from '../__generated__/graphql.ts';
import { gql } from '../__generated__/index.ts';
import FormError from '../components/FormError.tsx';

const CREATE_ACCOUNT_MUTATION = gql(/* GraphQL */ `
  mutation createAccount($createAccountInput: CreateAccountInput!) {
    createAccount(input: $createAccountInput) {
      ok
      error
    }
  }
`);

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { register, getValues, formState, handleSubmit } =
    useForm<IRegisterForm>({ mode: 'onChange' });

  const onCompleted = (data: CreateAccountMutation) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      createAccount: { ok, error }, // TODO: Add toast for error or success
    } = data;
    if (ok) {
      navigate('/auth/login');
    }
  };

  const [createAccountMutation, { loading: isLoading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    }
  );
  const onSubmit = () => {
    if (!isLoading) {
      const { username, email, password } = getValues();
      createAccountMutation({
        variables: {
          createAccountInput: {
            username,
            email,
            password,
          },
        },
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid w-full gap-2 my-5">
      <Helmet>
        <title> Register | RPG Manager</title>
      </Helmet>
      <label
        htmlFor="username"
        className="block text-xl capitalize cursor-pointer"
      >
        Username
        <input
          {...register('username', {
            required: 'Username is required.',
            maxLength: {
              value: 50,
              message: 'Maximum length is 50 characters.',
            },
            minLength: {
              value: 4,
              message: 'Minimum length is 4 characters.',
            },
          })}
          type="text"
          required
          minLength={4}
          maxLength={50}
          id="username"
          className="mt-1 input"
        />
      </label>
      {formState.errors.username?.message && (
        <FormError errorMessage={formState.errors.username?.message} />
      )}

      <label
        htmlFor="email"
        className="block text-xl capitalize cursor-pointer"
      >
        Email
        <input
          {...register('email', {
            required: 'Email is required.',
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          type="email"
          required
          id="email"
          className="mt-1 input"
        />
      </label>
      {formState.errors.email?.message && (
        <FormError errorMessage={formState.errors.email?.message} />
      )}
      {formState.errors.email?.type === 'pattern' && (
        <FormError errorMessage="Please enter a valid email." />
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

      <label
        htmlFor="confirmPassword"
        className="block text-xl capitalize cursor-pointer"
      >
        Confirm Password
        <input
          {...register('passwordConfirm', {
            required: 'Password confirmation is required.',
            maxLength: {
              value: 255,
              message: 'Maximum length is 255 characters.',
            },
            minLength: {
              value: 8,
              message: 'Minimum length is 8 characters.',
            },
            validate: (value) => {
              return (
                value === getValues().password || 'Passwords do not match.'
              );
            },
            deps: ['password'],
          })}
          type="password"
          required
          id="confirmPassword"
          minLength={8}
          maxLength={255}
          className="input"
        />
      </label>
      {formState.errors.passwordConfirm?.message && (
        <FormError errorMessage={formState.errors.passwordConfirm?.message} />
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="px-8 py-2 mt-6 border-green-900 rounded bg-secondary place-self-center hover:bg-secondary-600 border-x-2 disabled:bg-error-600 disabled:border-none"
      >
        {isLoading ? 'Loading...' : 'Register'}
      </button>
    </form>
  );
};
export default Register;
