/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Checkbox, ConfigProvider } from 'antd';
import { FC } from 'react';

interface ICusCheckBoxProps {
  checked: boolean;
  text?: string | undefined;
  disabled?: boolean;
  onChange?: (chk: boolean) => void;
}

export const CusCheckBox: FC<ICusCheckBoxProps> = ({
  checked,
  text = undefined,
  disabled = false,
  onChange = () => {},
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorBorder: '#d9d9d9',
          // colorPrimary: '#1677ff',
          // colorText: 'rgba(0, 0, 0, 0.88)',
          // colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
          // borderRadiusSM: 4,
        },
      }}
    >
      <Checkbox
        checked={checked}
        disabled={disabled}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
        css={cssCusCheckBox}
      >
        {text}
      </Checkbox>
    </ConfigProvider>
  );
};

const cssCusCheckBox = () => css`
  /* .ant-checkbox-inner:after{
  border-color: var(--grey-70);
} */
`;
