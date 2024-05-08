import Link from 'next/link';
import {
  PiCertificate,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiXLogo,
  PiYoutubeLogo,
} from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className="text-center w-full mt-8 pb-4 text-sm">
      <section className="flex justify-center gap-2 mb-1">
        <Link href="https://github.com/guido-marinho" target="_blank">
          <PiGithubLogo
            size={25}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/guilhermegattimarinho/"
          target="_blank"
        >
          <PiLinkedinLogo
            size={25}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
        <Link href="https://twitter.com/guimarinho_dev" target="_blank">
          <PiXLogo
            size={25}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
        <Link href="https://www.instagram.com/guimarinho7/" target="_blank">
          <PiInstagramLogo
            size={25}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCz1y3jdXPAIbqvDJgyZyG4w"
          target="_blank"
        >
          <PiYoutubeLogo
            size={25}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
        <Link
          href="https://www.credential.net/profile/guilhermegattimarinho/wallet#gs.5ocmow"
          target="_blank"
        >
          <PiCertificate
            size={25}
            className="hover:text-custom-pink text-custom-bg-opacity"
          />
        </Link>
      </section>
      <p className="mt-2 text-custom-bg-opacity"> Guilherme Marinho © 2023</p>
    </footer>
  );
}
