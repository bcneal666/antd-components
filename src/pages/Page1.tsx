/** @jsxImportSource @emotion/react  */
import { css } from '@emotion/react';
import { Flex } from 'antd';
import {
  CusButton,
  CusCheckBox,
  CusDivider,
  CusImage,
  CusInputNumber,
  CusInputText,
  CusModal,
  CusParagraph,
  CusSelect,
  CusSpin,
  CusText,
} from 'components/index';
import { usePage1 } from 'hooks/index';
import { FC } from 'react';

interface IPage1Props {}

const Page1: FC<IPage1Props> = (props) => {
  const {
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
  } = usePage1();

  return (
    <Flex vertical gap={24} css={cssPage1}>
      <CusModal
        open={openModal}
        title="CusModal"
        onCancel={() => setOpenModal(false)}
        content={<div>Test content</div>}
      />
      <CusButton text="CusButton" onClick={() => setOpenModal(true)} />
      <CusDivider />
      <CusSelect
        options={testOption}
        value={selectId}
        onChange={setSelectId}
        w={'150px'}
      />
      <CusCheckBox text="CusCheckBox" checked={checked} onChange={setChecked} />
      <CusImage src="/logo512.png" wh={'300px'} />
      <CusInputText
        value={inptText}
        onChange={setInptText}
        placeholder="CusInputText"
        w="300px"
      />
      <CusInputNumber
        value={inputNum}
        onChange={setInputNum}
        placeholder="CusInputNumber"
        w="300px"
      />
      <div>
        <CusParagraph text={paragraph} marginBlock={'20px 0px'} />
      </div>
      <div>
        <CusText text="CusText" />
      </div>
      <Flex
        flex="0 0 auto"
        justify="center"
        align="center"
        style={{ width: '100px', height: '100px' }}
      >
        <CusSpin spinning={true}>
          <div>Test Spin</div>
        </CusSpin>
      </Flex>
    </Flex>
  );
};

export default Page1;

const cssPage1 = css`
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow: auto;
`;
