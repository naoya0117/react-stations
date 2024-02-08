// @ts-check
import { useState } from "react"
import { DogImage } from "./DogImage"

/**
 * 犬の品種を選択するためのセレクトボックス
 * @param {{ breeds: string[] }} props 
 */
export const BreedsSelect = ({breeds}) => {
  const [selectedBreed, setSelectedBreed] = useState(breeds[0])
  /** @type {[string[], Function]} */
  const [selectedDogUrlList, setSelectedDogUrlList] = useState([]) // 修正された行

  /**
   * 選択された犬の品種に基づいてランダムな画像のURLを取得し、状態を更新する
   */
  const fetchSelectedDogUrlList = async () => {
    const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/3`)
    /** @type {{ message: string[] }} */


    const data = await response.json()

    setSelectedDogUrlList(data.message)
  }

  /**
   * セレクトボックスの値が変更された時に呼ばれる関数
   * @param {React.ChangeEvent<HTMLSelectElement>} event 
   */
  const handleChange = (event) => {
    setSelectedBreed(event.target.value)
  }

  return (
    <>
    <select value={selectedBreed} onChange={handleChange}>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>{breed}</option>
      ))}
    </select>
    <button onClick={fetchSelectedDogUrlList}>表示</button> {/* 修正された行 */}
    {selectedDogUrlList.map((url) => (
      <DogImage imageUrl={url} />
    ))} 
    </>
  )
}

export default BreedsSelect
