import React from 'react';
import { createRoot } from 'react-dom/client';
import { HeroCard } from './presentation/herocard'

const root = createRoot(document.getElementById('app'));
root.render(<HeroCard />);
