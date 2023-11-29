import { useState } from "react";


function Main(){

    const [tutor, setTutor] = useState('Программирование');
    const [time, setTime] = useState('1 раз в неделю');
    const [level, setLevel] = useState('Начинающий');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    function handleChange(e,setter){
        setter(e.target.value)
    }

    function btnHandler(){
       
        const requestData = { 
            "tutor" : tutor,
            "time" : time,
            "level" : level,
            "phone" : phone,
            "message" : message
        };
       
        fetch('http://localhost:4000/api/orders/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Другие заголовки, если нужно
            },
            body: JSON.stringify(requestData) // Преобразуем данные в формат JSON для передачи на сервер
        })
        .then(response => response.json()) // Обработка ответа от сервера в формате JSON
        .then(data => {
            console.log('Ответ от сервера:', data); // Логирование ответа от сервера
            // Здесь можно обрабатывать полученные данные от сервера
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error); // Логирование ошибки, если она возникла
        });
    }
    
    return (
        <div className="pages">
            <h1>Добро пожаловать на сайт по поиску репетиторов</h1>
            <h3>Кого вы ищите?</h3>
            <div>
                <label htmlFor="tutor">Выберите направление:</label>
                <select  id="tutor" name="tutor" onChange={(e)=> handleChange(e,setTutor)}>
                    <option  value="Программирование">Программирование</option>
                    <option value="Математика">Математика</option>
                    <option value="Английский">Английский</option>
                    <option value="Подготовка к школе">Подготовка к школе</option>
                </select>
            </div>
            <div>
                <label htmlFor="time">Как часто планируте заниматься?</label>
                <select id="time" name="time" onChange={(e)=> handleChange(e,setTime)}>
                    <option  value="1 раз в неделю">1 раз в неделю</option>
                    <option value="2 раз в неделю">2 раз в неделю</option>
                    <option value="3 раз в неделю">3 раз в неделю</option>
                    <option value="Пока не определился(лась)">Пока не определился(лась)</option>
                </select>
            </div>
            <div>
                <label htmlFor="level">Ваш текущий уровень:</label>
                <select id="level" name="level" onChange={(e)=> handleChange(e,setLevel)}>
                    <option  value="Начинающий">Начинающий</option>
                    <option value="Средний">Средний</option>
                    <option value="Продвинутый">Продвинутый</option>
                    <option value="Пока не определился(лась)">Пока не определился(лась)</option>
                </select>
            </div>
            <div>
            <label htmlFor="phone">Телефон для обратной связи</label>
            <input id="tel" name="phone" type="phone" onChange={(e)=> handleChange(e,setPhone)} />
            </div>
            <div>
            <textarea 
                id="message" 
                name="message" 
                rows="4" 
                cols="50" 
                placeholder="Напишите всю оставшуюся необходимую информацию"
                onChange={(e)=> handleChange(e,setMessage)}
                >
                </textarea>
            </div>
                
            <button onClick={btnHandler} >Оставить заявку</button>
            
        </div>
    )
    }

export default Main;