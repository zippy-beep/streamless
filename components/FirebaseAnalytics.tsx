'use client';

import { useEffect } from 'react';
import { initializeAnalytics } from '../lib/firebase';

export default function FirebaseAnalytics() {
  useEffect(() => {
    // Initialize Firebase Analytics on mount
    initializeAnalytics();
  }, []);

  return null; // This component doesn't render anything
}
