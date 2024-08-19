const MenuButton = ({ text }: {
  text: string,
}) => {
  return(
    <button className="bg-inherit hover:bg-main-color-darker text-slate-300  hover:text-white py-4 px-2">
      {text}
    </button>
  );
};

export default MenuButton;