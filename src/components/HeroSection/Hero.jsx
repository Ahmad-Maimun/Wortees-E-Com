import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-[rgb(15,15,15)] text-[21px] leading-[98px] font-normal uppercase">
        It’s not just at-shirt
      </span>
      <h1 className="mb-[35.2px] text-[rgb(15,15,15)] text-center text-[95px] leading-[98px] w-[760px] font-semibold">
        It’s a Manifesto to be Worn!
      </h1>
      <p className="mb-[35.2px] text-[rgb(15,15,15)] text-[17px] w-[600px] text-center">
        Wortees è una dichiarazione da indossare, è inchiostro; è un atto di
        responsabilità verbale; è polisemia indelebile del carattere che abbiamo
        impresso e che ci portiamo addosso.
      </p>
      <button
        className="py-3 text-white text-[18px] px-5 bg-[rgb(168,26,24)] rounded-2xl shadow-[0px_20px_38px_-6px_rgba(168,26,24,0.25)]
"
      >
        Leggi di più <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default Hero;
