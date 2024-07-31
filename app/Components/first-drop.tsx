"use client"
import { useContext } from 'react';
import { LevelContext } from './LevelContext';


type Props = {
    children:any
    name:string
    
}

export default function Section({children,name}:Props) {
    const level = 0
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
        {name}
      </LevelContext.Provider>
    </section>
  );
}
