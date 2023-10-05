import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionFive from "./SectionFive";
import ImageTextBlock from "../ui/ImageTextBlock";
import banner4 from '../assets/pictures/banner4.avif';
import banner5 from "../assets/pictures/banner5.avif";
import banner6 from "../assets/pictures/banner6.avif";
import banner7 from "../assets/pictures/banner7.jpg";


const { default: Header } = require("./Header");

const descriptions = {
desc1 : 'Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles.',
desc2 : 'To maintain the sensitive skin of the lips and around the eyes,we recommend products that impart hydration and vitamin-rich nourishment.',
desc3 : 'Our consultants are available to host you in-store and provide tailored guidance on gift purchases.',
desc4 : 'For assistance choosing a suitable gift, we welcome you to book a live video consultation with one of our knowledgeable consultants.'
}
 


const Home = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <div className="bg-offWhite">
        <SectionTwo />
        <ImageTextBlock img={banner4} title='Efficacious pairings' desc={descriptions.desc1} btn='Browse Skin Care Bundles'/>
        <ImageTextBlock even={true} img={banner5} title='Nurturing care for delicate skin' desc={descriptions.desc2} btn='Browse Eyes & Lips'/>
        <SectionFive/>
        <ImageTextBlock img={banner6} title='Store Locator' desc={descriptions.desc3} btn='Find a nearby store'/>
        <ImageTextBlock even={true} img={banner7} title="Virtual guidance from home's comfort" desc={descriptions.desc4} btn='Discover video consultations'/>
      </div>
    </>
  );
};

export default Home;
