import Hairdressers from './hairdressers.json';

export const getHairdressers = () => {
  return Hairdressers;
}

export const getSingleHairdresser = (id: string) => {
  let hairdresserList = Hairdressers.hairdressers;
  for(let i = 0; i < hairdresserList.length; i++) {
    if(hairdresserList[i].id === id) {
      return hairdresserList[i];
    }
  }
}