import React, { useState } from 'react';

const YourFormComponent = () => {
  const [direction, setDirection] = useState('');
  const [frequency, setFrequency] = useState('');
  const [level, setLevel] = useState('');
  const [phone, setPhone] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log({ direction, frequency, level, phone, otherInfo });
  };

  const formStyles = {
    maxWidth: '400px',
    margin: '20px auto 0',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.1)',
    fontFamily: 'Georgia, serif',
  };

  const labelStyles = {
    fontSize: '1em',
    marginBottom: '0.5rem',
    display: 'block',
    fontWeight: 'normal',
    textAlign: 'left',
    paddingLeft: '4px',
  };

  const inputSelectStyles = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '0.5rem',
    boxSizing: 'border-box',
    border: '1px solid #555',
    borderRadius: '5px',
  };

  const buttonStyles = {
    backgroundColor: '#1aac83',
    color: 'white',
    padding: '12px 24px', // Уменьшенный размер кнопки
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'block',
    margin: '0 auto',
    fontSize: '1.2em',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
  };

  const buttonHoverStyles = {
    transform: 'scale(1.05)',
    boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.3)',
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label htmlFor="direction" style={labelStyles}>Выберите направление:</label>
          <select id="direction" value={direction} onChange={(e) => setDirection(e.target.value)} style={inputSelectStyles}>
            <option value="">Выберите...</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label htmlFor="frequency" style={labelStyles}>Как часто планируете заниматься:</label>
          <select id="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)} style={inputSelectStyles}>
            <option value="">Выберите...</option>
            <option value="Once a week">Раз в неделю</option>
            <option value="Twice a week">Дважды в неделю</option>
            <option value="Every day">Каждый день</option>
          </select>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label htmlFor="level" style={labelStyles}>Ваш текущий уровень:</label>
          <select id="level" value={level} onChange={(e) => setLevel(e.target.value)} style={inputSelectStyles}>
            <option value="">Выберите...</option>
            <option value="Beginner">Начинающий</option>
            <option value="Intermediate">Средний</option>
            <option value="Advanced">Продвинутый</option>
          </select>
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label htmlFor="phone" style={labelStyles}>Телефон для обратной связи:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Введите номер телефона"
            style={{ ...inputSelectStyles, border: '1px solid #555' }}
            required
          />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label htmlFor="otherInfo" style={labelStyles}>Другая информация:</label>
          <textarea
            id="otherInfo"
            value={otherInfo}
            onChange={(e) => setOtherInfo(e.target.value)}
            placeholder="Введите дополнительную информацию"
            style={{ ...inputSelectStyles, resize: 'vertical' }}
            rows="4"
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{ ...buttonStyles, ...(isHovered && buttonHoverStyles) }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            Подтвердить
          </button>
        </div>
      </form>
    </div>
  );
};

export default YourFormComponent;
