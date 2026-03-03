'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { BigCard } from "@/app/components/ui/BigCard";
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Contact() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  const contacts = [
    { label: 'Email', value: 'Cyberxz2077@gmail.com', href: 'mailto:Cyberxz2077@gmail.com' },
    { label: '电话', value: '13142263877', href: 'tel:13142263877' },
    { label: '微信', value: 'Hi_Cortana', href: '#' },
    { label: 'GitHub', value: '@Cyberxz2077', href: 'https://github.com/cyberxz2077' },
    { label: 'X / Twitter', value: '@Cyberxz2077', href: 'https://x.com' },
  ];

  return (
    <div className={cn('min-h-screen transition-colors duration-300', isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900')}>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <BigCard title="联系方式">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-medium">求职中</span>
              </div>
              <p className="text-xl text-slate-600">期待与您交流</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="block p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold mb-1">{contact.label}</h3>
                  <p className="text-slate-600">{contact.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl">
              <h3 className="font-bold mb-4">工作地点</h3>
              <p className="text-xl">杭州 / 上海</p>
              <p className="text-slate-500">中国</p>
            </div>
          </BigCard>
        </div>
      </main>
    </div>
  );
}
