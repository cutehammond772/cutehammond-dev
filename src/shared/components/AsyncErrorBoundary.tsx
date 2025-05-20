"use client";

import { ErrorInfo, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
  error?: React.ReactNode;
  loading?: React.ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
  onReset?: () => void;
};

export default function AsyncErrorBoundary({
  children,
  error,
  loading,
  onError,
  onReset,
}: Props) {
  return (
    <ErrorBoundary fallback={error} onError={onError} onReset={onReset}>
      <Suspense fallback={loading}>{children}</Suspense>
    </ErrorBoundary>
  );
}
