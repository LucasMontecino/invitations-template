const PrimaryButton = ({ label }: { label: string }) => {
  return (
    <button className='px-4 py-2 bg-[rgb(var(--clr-brown))] rounded-full cursor-pointer shadow-[0_0_10px_1px_rgb(0,0,0,.2)]  duration-300 ease-in hover:scale-105 hover:bg-white hover:text-[rgb(var(--clr-brown))] focus:bg-white focus:text-[rgb(var(--clr-brown))]'>
      {label}
    </button>
  );
};

export default PrimaryButton;
