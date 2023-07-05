/* eslint-disable no-unused-vars */
import Hero from "../components/Hero";
import Container from "../components/CardContainer";
import BrickLayout from "../components/BrickLayout";
import New from "../components/New";
import WhyRollin from '../components/WhyRollin'
import Plus from "../components/Plus";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <New />
      <Container />

      <Plus />  
      {/* <BrickLayout /> */}
     
      <WhyRollin />
      <Cta />
 
    </div>
  )
}
