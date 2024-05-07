import Link from "next/link";
import { PiCertificate, PiGithubLogo, PiInstagramLogo, PiLinkedinLogo, PiXLogo, PiYoutubeLogo } from "react-icons/pi";
import MainLayout from "../components/MainLayout";

export default function Links() {
  return (
    <MainLayout>
      <section className="mt-20 grid grid-cols-3 grid-rows-3 gap-x-5 gap-y-24 justify-items-center">
        <Link href='https://github.com/guido-marinho' target="_blank">
          <PiGithubLogo
            size={50}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
              <Link href='https://www.linkedin.com/in/guilhermegattimarinho/' target="_blank">
          <PiLinkedinLogo 
            size={50}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
              <Link href='https://twitter.com/guimarinho_dev' target="_blank">
          <PiXLogo
            size={50}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
              <Link href='https://www.instagram.com/guimarinho7/' target="_blank">
          <PiInstagramLogo 
            size={50}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
              <Link href='https://www.youtube.com/channel/UCz1y3jdXPAIbqvDJgyZyG4w' target="_blank">
          <PiYoutubeLogo 
            size={50}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
              <Link href='https://www.credential.net/profile/guilhermegattimarinho/wallet#gs.5ocmow' target="_blank">
          <PiCertificate
            size={50}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
      </section>
    </MainLayout>
  )
}
