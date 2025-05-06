// app/report/page.tsx
import { Suspense } from 'react';
import ReportPageClient from './ReportPageClient';

export default function ReportPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">⏳ Loading report...</div>}>
      <ReportPageClient />
    </Suspense>
  );
}
