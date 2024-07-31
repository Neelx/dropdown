import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

type Props = {
    children:any
    name?:string
}


export default function Section({children,name}:Props) {
  const level = useContext(LevelContext);

  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
        {name}
      </LevelContext.Provider>
    </section>
  );
}
