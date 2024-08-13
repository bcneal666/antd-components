/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ConfigProvider, InputNumber } from 'antd';
import { FC, ReactNode } from 'react';
interface ICusInputNumberProps {
  value?: number | string | null;
  addonBefore?: ReactNode | undefined;
  addonAfter?: ReactNode | undefined;
  prefix?: ReactNode | undefined;
  suffix?: ReactNode | undefined;
  controls?: boolean;
  disabled?: boolean;
  size?: 'small' | 'middle' | 'large';
  placeholder?: string | undefined;
  onChange?: (value: number | string | null) => void;
  min?: number;
  max?: number;
  w?: string;
  readOnly?: boolean;
}

export const CusInputNumber: FC<ICusInputNumberProps> = ({
  value = 0,
  addonBefore = undefined,
  addonAfter = undefined,
  prefix = undefined,
  suffix = undefined,
  controls = false,
  disabled = false,
  size = 'large',
  placeholder = undefined,
  onChange = () => {},
  min = 0,
  max = 999999999999999,
  w = '100%',
  readOnly = false,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // borderRadius: 6,
          // borderRadiusLG: 8,
          // borderRadiusSM: 4,
          // colorBgContainer: '#ffffff',
          // colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
          // colorBorder: '#d9d9d9',
          // colorText: 'rgba(0, 0, 0, 0.88)',
          // colorTextDescription: 'rgba(0, 0, 0, 0.45)',
          // colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
          // colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
        },
        components: {
          InputNumber: {
            // hoverBorderColor: '#4096ff',
            // activeBorderColor: '#1677ff',
            // hoverBg: '#ffffff',
            // activeBg: '#ffffff',
          },
        },
      }}
    >
      <InputNumber
        value={value}
        size={size}
        placeholder={placeholder}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => Number(value?.replace(/\$\s?|(,*)/g, ''))}
        min={min}
        max={max}
        onChange={onChange}
        addonBefore={addonBefore}
        addonAfter={addonAfter}
        prefix={prefix}
        suffix={suffix}
        controls={controls}
        disabled={disabled}
        readOnly={readOnly}
        css={cssCusInputNumber(w)}
      />
    </ConfigProvider>
  );
};

const cssCusInputNumber = (w: string) => css`
  width: ${w};
`;
