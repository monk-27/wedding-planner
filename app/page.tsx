
'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { type Screen } from './types';
import Header from './components/header';
import GreetingScreen from './components/screens/greeting';
import GuestScreen from './components/screens/guest';
import IntroScreen from './components/screens/intro';
import LoadingScreen from './components/screens/loading';
import VenueScreen from './components/screens/venue';

export default function Page() {
  const [screenStack, setScreenStack] = useState<Screen[]>(['intro']);
  const [loadingMessage, setLoadingMessage] = useState<string>(''); 
  const currentScreen = screenStack[screenStack.length - 1];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [name, setName] = useState('Anita');

  const handleNext = (screen: Screen) => {
    let message = ''; 
    switch (screen) {
      case 'greeting':
        message = 'Shortlisting guests to accommodate your wedding party';
        break;
      case 'guest':
        message = 'Shortlisting venues to accommodate your wedding party';
        break;
      case 'venue':
        message = 'Shortlisting venues to accommodate your wedding party...';
        break;
      case 'loading':
      default:
        message = 'All done';
        break;
    }

    setLoadingMessage(message); // Set the dynamic message
    setScreenStack((prev) => [...prev, 'loading']);
    setTimeout(() => setScreenStack((prev) => [...prev.slice(0, -1), screen]), 2000);
  };

  const handleBack = () => {
    if (screenStack.length > 1) {
      setScreenStack((prev) => prev.slice(0, -1));
    }
  };

  return (
    <main
      className={`min-h-screen ${
        currentScreen === 'intro' ? 'bg-gradient-to-r from-[#FFFEFE] to-[#FEF9DC]' : 'bg-[#FEF9DC]'
      }`}
    >
      {/* Conditionally Render Header */}
      {currentScreen !== 'intro' && (
        <Header
          currentScreen={currentScreen}
          onBack={handleBack}
          canGoBack={screenStack.length > 1}
        />
      )}

      <div className={`container ${currentScreen === 'intro' ? '' : 'max-w-3xl'} mx-auto px-4 py-8`}>
        <AnimatePresence mode="wait" initial={false}>
          {currentScreen === 'intro' && (
            <IntroScreen key="intro" onNext={() => handleNext('greeting')} />
          )}
          {currentScreen === 'greeting' && (
            <GreetingScreen
              key="greeting"
              name={name}
              onNext={() => handleNext('guest')}
            />
          )}
          {currentScreen === 'guest' && (
            <GuestScreen key="guest" onNext={() => handleNext('venue')} />
          )}
          {currentScreen === 'venue' && (
            <VenueScreen key="venue" onNext={() => handleNext('loading')} />
          )}
          {currentScreen === 'loading' && (
            <LoadingScreen key="loading" loadingMessage={loadingMessage} />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
