import { useState } from "react";
import { DogImage } from "./DogImage";

export const Description = () => {
    const [ dogUrl, setDogUrl ] = useState("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");

    const updateDogUrl = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogUrl(data.message);
    }

    return (
        <>
            <h1>犬の画像を表示するサイトです</h1>
            <DogImage imageUrl={dogUrl} />
            <button onClick={updateDogUrl}>更新</button>
        </>
    );
}