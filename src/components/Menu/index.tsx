import MenuButton from "./MenuButton";

const MenuBar = () => {
  const buttons = ['Home', 'Event', 'Atlit']
  const reversedButtons = ['Login']
  return(
    <div className="flex flex-row w-full bg-main-color w">
      <div className="flex flex-row outline w-2/4">
        {buttons.map(b => <MenuButton key={b} text={b}/>)}
      </div>
      <div className="flex flex-row-reverse outline w-2/4">
        {reversedButtons.map(r => <MenuButton key={r} text={r}/>)}
      </div>
    </div>
  );
}

export default MenuBar;