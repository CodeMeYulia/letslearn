import React, { useState } from "react";
import ListTopics from "../ListTopic/ListTopics";
import ListWords from "../Listwords/ListWords";
import AddWord from '../AddWord/AddWord'
import useLocalStorage from "../../hooks/useLocalStorage";
import Form from "../Form/Form";
import data from './allWords.json'

function Home() {

    // const allWords = [
    //     {
    //         id: 1,
    //         word: 'flower',
    //         transcription: '[ˈflaʊə(r)]',
    //         translation: 'цветок',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 2,
    //         word: 'grass',
    //         transcription: '[ɡrɑːs]',
    //         translation: 'трава, газон',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 3,
    //         word: 'bunch',
    //         transcription: '[bʌntʃ]',
    //         translation: 'пучок, связка',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 4,
    //         word: 'tree',
    //         transcription: '[tri:]',
    //         translation: 'дерево',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 5,
    //         word: 'birch',
    //         transcription: '[bə:tʃ]',
    //         translation: 'береза',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 6,
    //         word: 'pine',
    //         transcription: '[paɪn]',
    //         translation: 'сосна',
    //         topic: 'nature'
    //     },
    //     {
    //         id: 7,
    //         word: 'glade',
    //         transcription: '[ɡleɪd]',
    //         translation: 'поляна',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 8,
    //         word: 'needles',
    //         transcription: '[ɡleɪd]',
    //         translation: 'хвоя',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 9,
    //         word: 'lawn',
    //         transcription: '[lɔ:n]',
    //         translation: 'газон',
    //         topic: 'природа'
    //     },
    //     {
    //         id: 10,
    //         word: 'petal',
    //         transcription: '[ˈpetl]',
    //         translation: 'лепесток',
    //         topic: 'работа'
    //     }
    // ];

    //состояние массива слов, по умолч  - пустое
    // const allWords = JSON.parse(data);
    // console.log(data);

    const [learnWords, setLearnWords] = useLocalStorage("wordsList", data)

    let newLearnWords = [...learnWords];

    //редактирование
    const fixWord = () => {
        console.log('alarma!')
    }


    //удаление слова
    const handleDelWord = (e) => {

        console.log("hru")

        // localStorage.setItem("wordsList", JSON.stringify(newLearnWords))
    }

    const [formVisible, setFormVisible] = useState(false)

    //добавить слово(форму ввода)
    const handleAddWord = () => {
        setFormVisible(!formVisible)
    }

    //сохранить новое
    // const saveNewWord = (e) => {
    //     e.preventDefault();
    //     console.log("mao");
    //     // console.log(learnWords);
    //     // const newWord = "hru"
    //     // // learnWords.push(newWord)
    //     // setLearnWords(newLearnWords, newWord);
    // }

    let addForm = <div className="addForm" ></div >

    if (formVisible) {
        addForm = <div className="addForm"><Form handleEsc={handleAddWord} id={learnWords.length + 1}
            handleDelWord={handleDelWord} data={data} /> </div >
    }

    return (
        <main>
            <aside>
                <div>
                    <AddWord handleAddWord={handleAddWord} />
                    <h2>Слова для повторения</h2>
                    <div className="words">
                        {
                            learnWords.map((item, index) => {
                                return (
                                    <>
                                        <ListWords
                                            key={index}
                                            id={index + 1}
                                            word={item.word}
                                            transcription={item.transcription}
                                            translation={item.translation}
                                            topic={item.topic}
                                            handleDelWord={handleDelWord}
                                            fixWord={fixWord}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                    {addForm}
                </div>
            </aside>
            <ListTopics />
        </main>
    )
}

export default Home;
