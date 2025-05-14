import { useEffect, useState } from 'react';
import './Select.scss';

export const Select = ({
  items = [],
  disabled,
  placeHolder,
  onSearch,
  multiply,
  value,
  onChange,
}) => {
  const [isDropDownOpen, toggleDropDownOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  let d = 'asd';

  useEffect(() => {
    console.log('change d');
  }, [d]);

  useEffect(() => {
    setTimeout(() => {
      d = 'aaa';
    }, 3000);
  }, []);

  const dropDown = (
    <div className={'uiXeny-select__holder__dropdown'}>
      {items.map((el) => (
        <div
          className={'uiXeny-select__holder__dropdown__item'}
          key={el?.value}
          onContextMenu={(e) => {
            e.preventDefault();
            console.log('context');
          }}
          onMouseDown={(e) => e.preventDefault()}
          onClick={(e) => {
            console.log(el.label);
            setCurrentValue(el.label);
          }}
        >
          {el?.label}
        </div>
      ))}
    </div>
  );

  return (
    <div className={'uiXeny-select'}>
      <input
        placeholder={placeHolder}
        className={'uiXeny-select__input'}
        type="text"
        value={currentValue}
        onChange={onChange}
        onFocus={() => {
          toggleDropDownOpen(true);
        }}
        onBlur={() => {
          toggleDropDownOpen(false);
        }}
      />
      <div className={'uiXeny-select__holder'}></div>
      {isDropDownOpen && dropDown}
    </div>
  );
};
