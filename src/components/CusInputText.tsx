/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ConfigProvider, Input } from 'antd';
import { FC } from 'react';

interface ICusInputTextProps {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onPressEnter?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  allowClear?: boolean;
  disabled?: boolean;
  type?: string;
  showCount?: boolean;
  size?: 'large' | 'middle' | 'small';
  prefix?: React.ReactNode | null;
  suffix?: React.ReactNode | null;
  w?: string;
}

export const CusInputText: FC<ICusInputTextProps> = ({
  value,
  placeholder = '',
  onChange = () => {},
  onPressEnter = () => {},
  onBlur = () => {},
  onFocus = () => {},
  allowClear = false,
  disabled = false,
  type = 'text',
  showCount = false,
  size = 'large',
  prefix = null,
  suffix = null,
  w = '100%',
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // controlHeight: 32,
          // controlHeightLG: 40,
          // controlHeightSM: 24,
          // borderRadius: 6,
          // borderRadiusLG: 8,
          // borderRadiusSM: 4,
          // colorText: 'rgba(0, 0, 0, 0.88)',
          // colorTextDescription: 'rgba(0, 0, 0, 0.45)',
          // colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
          // colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
          // colorBorder: '#d9d9d9',
        },
        components: {
          Input: {
            // activeBg: '#ffffff',
            // activeBorderColor: '#1677ff',
            // activeShadow: '0 0 0 2px rgba(5, 145, 255, 0.1)',
            // addonBg: 'rgba(0, 0, 0, 0.02)',
            // errorActiveShadow: '0 0 0 2px rgba(255, 38, 5, 0.06)',
            // hoverBg: '#ffffff',
            // hoverBorderColor: '#4096ff',
            // inputFontSize: 14,
            // inputFontSizeLG: 16,
            // inputFontSizeSM: 14,
            // paddingBlock: 4,
            // paddingBlockLG: 7,
            // paddingBlockSM: 0,
            // paddingInline: 11,
            // paddingInlineLG: 11,
            // paddingInlineSM: 7,
            // warningActiveShadow: '0 0 0 2px rgba(255, 215, 5, 0.1)',
          },
        },
      }}
    >
      <div css={cssInput(w)}>
        <Input
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onPressEnter={(e) => onPressEnter()}
          onBlur={onBlur}
          onFocus={onFocus}
          allowClear={allowClear}
          disabled={disabled}
          type={type}
          showCount={showCount}
          size={size}
          prefix={prefix}
          suffix={suffix}
        />
      </div>
    </ConfigProvider>
  );
};

const cssInput = (w: string) => css`
  width: ${w};
  /* input {
    font-weight: 600;
  } */
  /* .ant-input-clear-icon{
    font-size: 14px;
  } */
`;
