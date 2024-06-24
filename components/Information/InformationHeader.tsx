import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const InformationHeader: React.FC = () => {
  return (
    <div className="mx-auto mb-6 flex max-w-screen-2xl flex-col items-center rounded-lg bg-black p-6 shadow-md md:p-12 lg:flex-row">
      <div className="order-2 mt-5 w-full lg:order-1 lg:w-2/3 lg:pr-8">
        <h1 className="mb-4 text-3xl font-bold text-white">Dreuge worst</h1>
        <h2 className="font-italic mb-4 text-2xl font-bold text-white">
          Ik zol niet weetn wat ik zunder mos!
        </h2>
        <p className="mb-6 text-lg text-white">
          Mijn opa begon lang geleden een kaaswinkeltje in Ommen en Hardenberg. Al snel zag hij dat
          er behoefte was aan een uitbreiding van het assortiment. Onder meer{' '}
          <span className="text-pink-300">ambachtelijk droge worst</span> werd vanaf dat moment ook
          verkocht. Zonder dat hij het zelf doorhad, richtte hij misschien wel de eerste
          delicatessewinkeltjes van Nederland op. Mijn vader volgde mijn opa op en zette het bedrijf
          met veel passie voort. Toen mijn vader 7 jaar geleden 65 jaar werd, vroeg hij of ik de
          Klazienaveense markt van hem wilde overnemen. Uiteraard nam ik deze kans met twee handen
          aan. Met een glimlach van oor tot oor sta ik iedere zaterdag de mooiste worsten te
          verkopen. Met als uitbreiding onder meer deze online shop.
        </p>
        <Link
          href="/search"
          className="mb-8 mt-2 inline-block rounded bg-pink-300 px-6 py-3 text-white hover:bg-pink-400"
        >
          Naar de shop
        </Link>
        <blockquote className="mb-6 border-l-4 border-pink-300 pl-4 italic text-white">
          Opa had met zijn oog voor ondernemen allang gezien dat ze in die specifieke regio dol
          waren op Drentse droge worst. Nu is droge worst zo verbonden met de regio Noord-Oost
          Drenthe dat Daniël Lohues er een heel nummer aan heeft gewijd.
        </blockquote>
      </div>
      <div className="lg-pl-6 order-2 mt-6 flex w-full flex-col items-center justify-center md:order-1 md:mt-0 lg:order-2 lg:w-1/3">
        <div className="h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80 lg:h-96 lg:w-96">
          <Image
            src="/images/banner-photo-one.png"
            alt="Placeholder"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <blockquote className="mt-6 border-l-4 border-pink-300 pl-4 text-center italic text-pink-300">
          Wat is er mooier dan je opa's en vaders legacy voort te zetten?
        </blockquote>
      </div>
    </div>
  );
};

export default InformationHeader;
