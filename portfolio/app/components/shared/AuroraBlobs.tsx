'use client';

import React from 'react';

export function AuroraBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FAFBFC] to-[#F8FAFC]" />
      
      <div className="absolute top-10 left-20 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(14,165,233,0.3)_0%,transparent_70%)] rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.3)_0%,transparent_70%)] rounded-full blur-3xl animate-float" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/2 right-30 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(249,115,22,0.2)_0%,transparent_70%)] rounded-full blur-3xl animate-float" style={{ animationDelay: '-10s' }} />
    </div>
  );
}
