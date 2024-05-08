'use client';

import CertificatesCarrousel from './components/CertificatesCarrousel';
import MainLayout from './components/MainLayout';

export default function Page() {
  return (
    <>
      <MainLayout>
        <CertificatesCarrousel />
      </MainLayout>
    </>
  );
}
