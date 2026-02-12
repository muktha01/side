'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function TechnicalRecruitmentPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/contact?service=technical-recruitment');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}
