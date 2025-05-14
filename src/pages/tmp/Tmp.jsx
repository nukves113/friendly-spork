import { Select } from './Select.jsx';

export const Tmp = () => {
  const items = [
    {
      label: 'Asd',
      value: 'Asd',
    },
    {
      label: 'Looong',
      value: 'Looong',
    },
    {
      label: 'Dsd',
      value: 'Dsd',
    },
  ];

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Select items={items} placeHolder={'choose...'} defaultValue={'asd'} />
      <Select items={items} placeHolder={'choose...'} defaultValue={'asd'} />
    </div>
  );
};
