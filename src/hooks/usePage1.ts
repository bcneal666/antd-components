import { useState } from 'react';
import { SelectOptionType } from 'components/CusSelect';

const usePage1 = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const testOption: Array<SelectOptionType> = [
    {
      value: 'TEST1',
      label: 'TEST1',
    },
    {
      value: 'TEST2',
      label: 'TEST2',
    },
  ];
  const [selectId, setSelectId] = useState<string | null>(testOption[0].value);
  const [checked, setChecked] = useState<boolean>(false);
  const [inptText, setInptText] = useState<string>('');
  const [inputNum, setInputNum] = useState<number | string | null>(1000);
  const paragraph =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, praesentium veritatis? Et consequuntur molestiae amet nulla nobis delectus. Tenetur ex maxime adipisci accusantium iure debitis officiis qui consequatur dignissimos quaerat?';

  return {
    testOption,
    selectId,
    setSelectId,
    checked,
    setChecked,
    inptText,
    setInptText,
    inputNum,
    setInputNum,
    paragraph,
    openModal,
    setOpenModal,
  };
};

export { usePage1 };
