import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-10 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-black mb-8 text-center">Om oss på HomeBNB</h1>
      <div className="mb-10 flex justify-center">
        <img
          className="w-full max-w-4xl h-auto rounded-lg shadow-xl"
          src="https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/bltcb75410b7ba627e7/6492190680e98f376224b7dd/image1.png?crop=100p,100p,x0,y0&width=720&height=405&auto=webp"
          alt="ThinAirbnb Office Space"
        />
      </div>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
            Varje utrymme hos HomeBNB är noggrant utformat för att kombinera modern design med en hemtrevlig känsla, perfekt för både avkoppling och fokuserat arbete. Med höghastighetsinternet och ergonomiska arbetsstationer ser vi till att du kan arbeta effektivt och bekvämt.
            Men HomeBNB är mer än bara ett ställe att bo på det är en plats för gemenskap. Här får du möjlighet att träffa likasinnade, knyta nya kontakter och samarbeta i inspirerande projekt.
            Vår globala närvaro gör det enkelt för dig att resa, arbeta och upptäcka nya kulturer utan att kompromissa med din livsstil. Samtidigt kan du känna dig trygg med att alla våra boenden är noggrant verifierade för att garantera högsta kvalitet och säkerhet.
            Hos HomeBNB får du det perfekta mötet mellan komfort, kreativitet och gemenskap.
</p>
      </div>
    </div>
  );
};

export default About;
