'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Certificates } from '../Types/Certificates';
import estacioPython from '../images/certificates/estacio-python.png';
import trybeFS from '../images/certificates/trybe-fullstack.png';
import trybePython from '../images/certificates/trybe-python.png';

const certificates: Certificates[] = [
  {
    image: estacioPython,
    title: 'Estácio Python',
    description: 'Certificado de conclusão do curso de Python da Estácio',
  },
  {
    image: trybeFS,
    title: 'Trybe Fullstack',
    description: 'Certificado de conclusão do curso Fullstack da Trybe',
  },
  {
    image: trybePython,
    title: 'Trybe Python',
    description: 'Certificado de conclusão do curso de Python da Trybe',
  },
];

export default function CertificatesCarrousel() {
  const [currentCertificate, setCurrentCertificate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertificate((currentCertificate + 1) % certificates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentCertificate]);

  const nextSlide = () => {
    setCurrentCertificate((currentCertificate + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentCertificate(
      (currentCertificate - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <div className="mt-14  flex justify-between">
      <button onClick={prevSlide}>
        <GrPrevious color="#cc0088" />
      </button>
      {certificates.map((certificate, index) => (
        <div
          key={index}
          style={{
            display: index === currentCertificate ? 'block' : 'none',
          }}
        >
          <h2>{certificate.title}</h2>
          <p>{certificate.description}</p>
          <Image
            src={certificate.image}
            alt="Certificate"
            width={500}
            height={500}
          />
        </div>
      ))}
      <button onClick={nextSlide}>
        <GrNext color="#cc0088" />
      </button>
    </div>
  );
}
