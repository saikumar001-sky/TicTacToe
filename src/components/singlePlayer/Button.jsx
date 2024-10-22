import { useEffect, useState } from "react"

export default function Button() {
    const [valuesArray, Setvalues] = useState(Array(9).fill(null))
    // const [turn, setTurn] = useState(true)
    const [isXwon, setXwon] = useState(false)
    const [isOwon, setOwon] = useState(false)
    const [winIndexes, setwinIndexes] = useState([])

    const updateBtnValues = async (index) => {
        if (turn && !valuesArray[index]) {
            valuesArray[index] = "😀"
        } else if (!turn && !valuesArray[index]) {
            valuesArray[index] = "💗"
        } else {
            return
        }
        const newValues = [...valuesArray]
        Setvalues(newValues)
        turn = !turn
        checkSuccessCase()
        if (!turn) {
            computerChance(index)
        }

    }
    let turn = true
    const winXConditions = []
    const winOConditions = []
    const successCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const computerChance = (index) => {
        successCases
        const includedIndex = []
        const availIndex = []
        successCases.forEach((ele) => {
            // let includeOppVal = 0
            // let notIncludeOppVal = 0
            // ele.forEach((index) => {
            //     if(valuesArray[index]=="😀"){
            //         includeOppVal++
            //     }
            // })
            if (ele.includes(index)) {
                includedIndex.push(ele)
            }
        })
        includedIndex.forEach((ele) => {
            ele.forEach((index) => {
                if (!valuesArray[index]) {
                    availIndex.push(index)
                }
            })
        })
        const randomIndex = availIndex[(Math.floor(Math.random() * availIndex.length))]
        console.log(randomIndex)
        updateBtnValues(randomIndex)
    }
    const addClass = (index) => {
        if (isOwon) {
            if (winIndexes.includes(index)) {
                return "win__value"
            }
        }
        if (isXwon) {
            if (winIndexes.includes(index)) {
                return "win__value"
            }
        }
    }
    const checkSuccessCase = () => {

        valuesArray.map((ele, index) => {
            if (ele == "😀") {
                return winXConditions.push(index)

            } else if (ele == "💗") {
                return winOConditions.push(index)
            }
        })
        const Xwon = successCases.some((arr) => {
            const iswon = arr.every(arrEle => winXConditions.includes(arrEle))
            if (iswon) {
                setwinIndexes(arr)
                setXwon(iswon)
            }
            return iswon
        })
        const Owon = successCases.some((arr) => {
            const iswon = arr.every(arrEle => winOConditions.includes(arrEle))
            if (iswon) {
                setwinIndexes(arr)
                setOwon(iswon)
            }
            return iswon
        })

    }

    return (

        valuesArray.map((ele, index) => {
            return (
                <button className={addClass(index)} disabled={isXwon || isOwon} key={index} onClick={() => updateBtnValues(index)}>{ele}</button>
            )
        })
    )
}