interface IFormErrorProps {
  errorMessage: string;
}

const FormError: React.FC<IFormErrorProps> = ({
  errorMessage,
}: IFormErrorProps) => (
  <span className="font-medium text-error">{errorMessage}</span>
);
export default FormError;
