// @ts-check
import { useEffect, useState } from 'react';
import BreedsSelect from './BreedsSelect';


/**
 * 犬のリストを表示するコンテナコンポーネント
 * @returns {JSX.Element}
 */
export const DogListContainer = () => {
  /** @type {[string[], Function]} */
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    const fetchDogList = async () => {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await response.json();
      setDogList(Object.keys(data.message));
    };
    fetchDogList();
  }, []);

  return (
    <BreedsSelect breeds={dogList} />
  );
};

export default DogListContainer
