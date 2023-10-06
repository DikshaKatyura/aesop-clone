const Button = (props) => {
  return (
    <div className="mt-[30px]">
      <div className="w-btn ">
        <a
          style={{
            transition: "all .2s cubic-bezier(.645,.045,.355,1)",
            
          }}
          className={`${
            props.home
              ? "border-offWhite hover:bg-offWhite hover:text-[#333]"
              : "border-primary hover:bg-offBlack hover:text-offWhite"
          } flex justify-between items-center  inline-block border border-solid whitespace-nowrap lg:py-5 lg:px-6 px-2 py-2 text-xs lg:text-base`}
          href="/"
        >
          {props.btn}
          <span className="pl-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

          </span>
        </a>
      </div>
    </div>
  );
};

export default Button;
