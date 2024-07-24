/** @jsxImportSource @emotion/react  */
import { css } from '@emotion/react';
import { Flex } from 'antd';
import { CusButton, CusDivider } from 'components/index';
import { FC } from 'react';

interface IPage1Props {}

const Page1: FC<IPage1Props> = (props) => {
  return (
    <Flex vertical justify="center" align="center" css={cssPage1}>
      <CusButton text="CusButton" />
      <CusDivider />
    </Flex>
  );
};

export default Page1;

const cssPage1 = css`
  width: 100%;
  height: 100%;
`;

