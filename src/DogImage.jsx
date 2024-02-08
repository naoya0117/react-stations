// @ts-check

/**
 * @typedef {Object} Props
 * @property {string} imageUrl
 */

/**
 * 犬の画像を表示するコンポーネント
 * @param {Props} props 
 * @returns 
 */
export const DogImage = (props) => {
    return (
        <img src={props.imageUrl} alt="犬の画像" />
    );
}