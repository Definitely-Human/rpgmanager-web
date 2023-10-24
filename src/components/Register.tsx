import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreateAccountMutation } from '../__generated__/graphql.ts';
import { gql } from '../__generated__/index.ts';
import FormError from './FormError.tsx';

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
    useForm<IRegisterForm>();

  const onCompleted = (data: CreateAccountMutation) => {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      createAccount: { ok, error },
    } = data;
    if (ok) {
      navigate('/');
    }
  };

  const [
    createAccountMutation,
    { data: createAccountMutationResult, loading: isLoading },
  ] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full gap-3 my-5 text-center"
    >
      <label
        htmlFor="username"
        className="block text-xl capitalize cursor-pointer"
      >
        Username
        <input
          {...register('username', { required: 'Username is required.' })}
          type="text"
          required
          id="username"
          placeholder="Username"
          className="mt-2 input"
        />
      </label>
      {formState.errors.username?.message && (
        <FormError errorMessage={formState.errors.username?.message} />
      )}

      <input
        {...register('email', {
          required: 'Email is required.',
          pattern:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
        type="email"
        required
        placeholder="Email"
        className="input"
      />
      {formState.errors.email?.message && (
        <FormError errorMessage={formState.errors.email?.message} />
      )}
      {formState.errors.email?.type === 'pattern' && (
        <FormError errorMessage="Please enter a valid email." />
      )}

      <input
        {...register('password', {
          required: 'Password is required.',
        })}
        type="password"
        required
        placeholder="Password"
        className="input"
      />
      {formState.errors.password?.message && (
        <FormError errorMessage={formState.errors.password?.message} />
      )}

      <input
        {...register('passwordConfirm', {
          required: 'Password confirmation is required.',
        })}
        type="password"
        required
        placeholder="Confirm Password"
        className="input"
      />
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
      {createAccountMutationResult?.createAccount.error && (
        <FormError
          errorMessage={createAccountMutationResult.createAccount.error}
        />
      )}
    </form>
  );
};
export default Register;
