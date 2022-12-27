// const { useState } = React

// export function LongTxt() {
//     const [isLongTxtShown, setLongTxtShown] = useState(false)

//     function getTxtToShown(isLongTxtShown, txt, length) {
//         return (txt.length < length || isLongTxtShown) ? txt : txt.substring(0, length + 1) + '...'
//     }

//     function onToggleLongTxt() {
//         setLongTxtShown((prevLongTxtShown) => !prevLongTxtShown)
//     }

//     return <div>
//         <p>{getTxtToShown(isLongTxtShown, txt, length)}</p>
//         {txt.length > length && <button onClick={{ onToggleLongTxt }}>{isLongTxtShown ? 'Read less' : 'Read more'}</button>}
//     </div>
// }