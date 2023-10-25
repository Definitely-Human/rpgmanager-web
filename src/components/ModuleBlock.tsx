type IModuleBlockProps = {
  children: JSX.Element;
  name?: string;
};

const ModuleBlock = ({ children, name }: IModuleBlockProps) => {
  return (
    <div className="w-full h-full min-h-0 px-3 pt-1 overflow-auto border-b-2 border-gray-900">
      {name && <h3 className="mb-2 text-2xl text-center">{name}</h3>}
      {children}
    </div>
  );
};

ModuleBlock.defaultProps = {
  name: '',
};

export default ModuleBlock;
