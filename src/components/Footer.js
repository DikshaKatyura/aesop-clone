const Footer = () =>{
return (
    <footer className="bg-offBlack text-offWhite">
        <div className="md:px-10 md:py-[50px] sm:px-5 sm:py-[25px] grid sm:grid-cols-2 md:gap-20 sm:gap-10 xl:grid-cols-5 md:grid-cols-3 grid-rows-auto border-b-2 border-offWhite">
        <div className="col-start-1 col-end-3">
            <section>
                <h3 className="font-bold text-sm md:text-[.9375rem] whitespace-nowrap">Subscribe to Aesop communications</h3>
                <hr   className="my-4 border-b" />
                <form>
                    <input type="email" placeholder="Email address" className="bg-offBlack border border-offWhite border-solid w-full h-9 px-2.5 caret-offWhite text-xl leading-relaxed"/>
                    <div className="pt-4 flex items-baseline">
                        <input type="checkbox" id="check" />
                        <label className="text-sm leading-7  pl-3" htmlFor="check">Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <a className="underline" href="/"> privacy policy</a>.</label>
                    </div>
                </form>
            </section>
        </div>
        <section className="hyperlink">
            <h3 className="font-bold text-sm md:text-[.9375rem] whitespace-nowrap">Orders and support</h3>
            <hr   className="my-4 border-b" />
            <ul className="pointer-cursor text-base leading-7 text-base leading-7">
                <li>Contact us</li>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Order History</li>
                <li>Terms and Conditions</li>
            </ul>
        </section>
        <section>
        <h3 className="font-bold text-sm md:text-[.9375rem] whitespace-nowrap">Services</h3>
            <hr   className="my-4 border-b" />
            <ul className="pointer-cursor text-base leading-7">
                <li>live assistance</li>
                <li>corporate gifts</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Order History</li>
            </ul>
        </section>
        <section>
        <h3 className="font-bold text-sm md:text-[.9375rem] whitespace-nowrap">Location preferences</h3>
            <hr   className="my-4 border-b" />
            <ul className="pointer-cursor text-base leading-7">
                <li>Shipping:</li>
                <li><a className="underline" href="/">Hong Kong SAR, China</a></li>
                <li><br></br></li>
                <li>Language:</li>
                <li><a className="underline" href="/">English</a></li>
                <li><a className="underline" href="/">Mandarin</a></li>
              
            </ul>
        </section>
        <div className="col-start-1 col-end-3">
            <section>
            <h3 className="font-bold text-sm md:text-[.9375rem] whitespace-nowrap">Sustainability</h3>
                <hr   className="my-4 border-b" />
                <div>
                All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
                </div>
            </section>
        </div>
        <section className="hyperlink">
        <h3 className="font-bold text-sm md:text-[.9375rem] whitespace-nowrap">About</h3>
            <hr   className="my-4 border-b" />
            <ul className="pointer-cursor text-base leading-7">
                <li>our story</li>
                <li>foundation</li>
                <li>careers</li>
                <li>privacy policy</li>
                <li>cookie policy</li>
            </ul>
        </section>
        <section>
        <h3 className="font-bold text-sm md:text-[.9375rem] whitespace-nowrap">Social Media</h3>
            <hr   className="my-4 border-b" />
            <ul className="pointer-cursor text-base leading-7">
                <li>Instagram</li>
                <li>twitter</li>
                <li>facebook</li>
                <li>weibo</li>
                <li>we chat</li>
            </ul>
        </section>
        </div>
    <div className="h-[4.5rem] flex items-center  px-10 font-bold text-base leading-7">
    © Aesop
    </div>
    </footer>
)
}

export default Footer;