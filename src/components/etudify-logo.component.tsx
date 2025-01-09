import Image from "next/image";

interface EtudifyLogoProps {
  classNameImgBox?: string;
  classNameTxt?: string;
}

export function EtudifyLogo({
  classNameImgBox,
  classNameTxt,
}: EtudifyLogoProps) {
  return (
    <>
      <div className={`${classNameImgBox} sm:w-16 w-12 max-[300px]:w-10`}>
        <Image
          src="/assets/logo.png"
          alt="Logo Etudify"
          width={1590}
          height={1762}
          className="w-full"
        />
      </div>
      <span
        className={`${classNameTxt} sm:text-4xl text-3xl max-[300px]:text-2xl font-bold text-primary`}
      >
        Etudify
      </span>
    </>
  );
}
