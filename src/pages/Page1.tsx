/** @jsxImportSource @emotion/react  */
import { css } from '@emotion/react';
import { Flex } from 'antd';
import { SelectOptionType } from 'components/CusSelect';
import { CusButton, CusDivider, CusSelect } from 'components/index';
import { FC, useState } from 'react';

interface IPage1Props {}

const Page1: FC<IPage1Props> = (props) => {
  const [selectId, setSelectId] = useState<string | null>(null);
  const testOption: Array<SelectOptionType> = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
  ];
  return (
    <Flex vertical css={cssPage1}>
      <CusButton text="CusButton" />
      <CusDivider />
      <CusSelect
        options={testOption}
        value={selectId}
        onChange={setSelectId}
        w={'150px'}
      />
    </Flex>
  );
};

export default Page1;

const cssPage1 = css`
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #fff1e6;
`;
