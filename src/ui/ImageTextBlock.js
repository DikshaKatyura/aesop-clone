const ImageTextBlock = (props) => {
  return (
    <section className="pt-[150px]">
      <div className={`flex flex-wrap ${props.even ? 'flex-row-reverse' :'flex-row'} box-border justify-start`}>
        <div className={` ${props.even ? 'pl-[8.3333%]' : 'pr-[8.3333%]'} w-2/3`}>
          <img
            src={props.img}
            className="w-full"
            alt="A texture shot of two products together"
            loading="lazy"
          />
        </div>
        <aside className={` ${props.even ? 'pl-20' : 'pr-20'} w-1/3 text-offBlack`}>
          <article>
            <header className="mb-[30px]">
              <h2 className="text-3xl leading-snug">{props.title}</h2>
            </header>
            <div>
              <p className="text-base leading-7">
                {props.desc}
              </p>
              <div className="mt-[30px]">
                <div className="w-btn">
                  <a
                    style={{
                      transition: "all .2s cubic-bezier(.645,.045,.355,1)",
                    }}
                    className="inline-block border border-solid border-primary py-5 px-6 hover:bg-offBlack hover:text-offWhite"
                    href="/"
                  >
                    {props.btn}
                  </a>
                </div>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
};

export default ImageTextBlock;
