'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function BusinessLoansPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to contact page with service info
    router.push('/contact?service=business-loans');
  }, [router]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500 mx-auto mb-4"></div>
        <p className="text-white">Redirecting to contact page...</p>
      </div>
    </div>
  );
}
