const EventBox = ({ title }: {
  title: string
}) => {
  return(
    <div className="outline outline-main-color w-11/12 my-4  mx-auto rounded-lg">
      <div className="bg-main-color text-slate-200 hover:text-white hover:bg-main-color-darker
      py-2 px-2 cursor-pointer flex flex-row justify-between">
        <h1 className="text-2xl text-inherit w-fit">{title}</h1>
        <span className="material-symbols-outlined text-[36px]">keyboard_arrow_down</span>
      </div>
      test<br />
      test<br />
      test<br />
      test<br />
    </div>
  );
};

export default EventBox;