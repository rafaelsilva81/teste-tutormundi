import { atom } from "jotai";

/* 
  Esse é um atom da biblioteca Jotai
  que funciona como um "Estado Global" acessível por 
  todos os componentes da aplicação através do hook useAtom()
*/

export const ratingAtom = atom(0);
