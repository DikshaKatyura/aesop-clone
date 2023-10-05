import SectionOne from "./SectionOne";
import ImageTextBlock from "../ui/ImageTextBlock";
import Carousal from "../ui/Carousal";
import Text from "./Text";


import banner4 from '../assets/pictures/banner4.avif';
import banner5 from "../assets/pictures/banner5.avif";
import vid1 from "../assets/videos/vid1.mp4";


import prod1 from "../assets/products/prod1.webp";
import prod2 from "../assets/products/prod2.webp";
import prod3 from "../assets/products/prod3.webp";
import prod4 from "../assets/products/prod4.webp";
import prod5 from "../assets/products/prod5.webp";
import prod6 from "../assets/products/prod6.avif";
import prod7 from "../assets/products/prod7.avif";

import prod11 from "../assets/products/prod11.avif";
import prod12 from "../assets/products/prod12.avif";
import prod13 from "../assets/products/prod13.avif";
import prod14 from "../assets/products/prod14.avif";
import prod15 from "../assets/products/prod15.avif";
import prod16 from "../assets/products/prod16.avif";
import Footer from "./Footer";




const { default: Header } = require("./Header");

const descriptions = {
desc1 : 'Our consultants have long combined complementary formulations to effect additional benefits for the skin. Incorporate this time-honoured practice into your regimen with our recommended bundles.',
desc2 : '',
desc3 : 'For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin.',
}

const products = [
   {
    img: prod1,
    name: 'Parsley Seed Anti-Oxidant Skin Care Kit',
    desc : 'A trio of Parsley Seed staples'
  },
 {
    img: prod2,
    name: 'Parsley Seed Anti-Oxidant Eye Cream',
    desc : 'Nourishes delicate skin around eyes'
  },
   {
    img: prod3,
    name: 'Parsley Seed Facial Cleansing Oil',
    desc : 'Gently liberates skin of grime and makeup'
  },
  {
    img: prod4,
    name: 'Parsley Seed Anti-Oxidant Skin Care Kit',
    desc : 'A trio of Parsley Seed staples'
  },
  {
    img: prod6,
    name: 'Parsley Seed Anti-Oxidant Skin Care Kit',
    desc : 'A trio of Parsley Seed staples'
  },
  {
    img: prod5,
    name: 'Parsley Seed Anti-Oxidant Skin Care Kit',
    desc : 'A trio of Parsley Seed staples'
  },
  {
    img: prod7,
    name: 'Parsley Seed Anti-Oxidant Skin Care Kit',
    desc : 'A trio of Parsley Seed staples'
  },
  {
    img:prod11,
    name :'Ouranon Eau de Parfum',
    desc : 'Woody, spicy, resinous'
  },
  {
    img:prod12,
    name :'Gloam Eau de Parfum',
    desc : 'Floral, spicy, green'
  },
  {
    img:prod13,
    name :'Eidesis Eau de Parfum',
    desc : 'Woody, spicy, ambery'
  },
   {
    img:prod14,
    name :'Erémia Eau de Parfum',
    desc : 'A green, floral, citrus fragrance'
  },
   {
    img:prod15,
    name :'Miraceti Eau de Parfum',
    desc : 'Resinous, woody, spicy fragrance'
  },
   {
    img:prod16,
    name :'Karst Eau de Parfum',
    desc : 'Fresh, herbaceous, marine fragrance'
  }
]
 
const textBlock = {
  block1 : {
    title:'Our personal scents',
    miniTitle:'Fragrance',
    para :'Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.',
    btn : 'See all frangrance'
  },
  block2 : {
    title:'Fortification of the highest order',
    miniTitle:'Parsley Seed Skin Care',
    para :'Our Parsley Seed Skin Care range provides potent doses of anti-oxidant rich ingredients in formulations suited to all skin types. They are especially recommended for those in urban environments, to fortify the skin against the damaging effects of free radicals.',
    btn : 'Explore the range'
  }
}


const Home = () => {
  return (
    <>
      <Header />
      <SectionOne />
      <div className="bg-offWhite">
        <ImageTextBlock even={true} vid={vid1} title='Efficacious pairings' desc={descriptions.desc1} btn='Browse Skin Care Bundles'/>
        <Carousal products={products.slice(7)} block={textBlock.block1}/>
        <ImageTextBlock img={banner4} title='Efficacious pairings' desc={descriptions.desc1} btn='Browse Skin Care Bundles'/>
        <Carousal products={products.slice(0,7)} block={textBlock.block2}/>
        <ImageTextBlock img={banner5} miniTitle='Facial Appointments' title='Composure for the skin and senses' desc={descriptions.desc3} btn='Learn more'/>
        <Text />
        <Footer />
      </div>
    </>
  );
};

export default Home;
