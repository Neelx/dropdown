import Image from "next/image";
import Heading from "./Components/heading";
import Section from "./Components/first-drop";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen text-5xl font-semibold p-2">

 
     <Section name="">
      <Heading>Title</Heading>
      <Section name="">
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Link href="/neel">
        <Section  name="">
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section name="neel">
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
        </Link>
      </Section>
    </Section>
    </div>
  );
}
