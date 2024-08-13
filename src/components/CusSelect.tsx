/** @jsxImportSource @emotion/react */
import { LoadingOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { ConfigProvider, Flex, Select } from 'antd';
import { ReactComponent as IconArrow } from 'assets/arrow-select.svg';
// import { ReactComponent as IconCheck } from 'assets/check.svg';
import { memo, useState } from 'react';

export type SelectOptionType = {
  value: string;
  label: string;
};

interface CusSelectProps {
  options: Array<SelectOptionType>;
  value: string | null;
  prefix?: React.ReactNode | undefined;
  onChange?: (value: string) => void;
  onSelect?: (value: string) => void;
  onOpen?: () => void;
  loading?: boolean;
  disabled?: boolean;
  fw?: number;
  dw?: number;
  w?: string;
  placeholder?: string;
  isFilter?: boolean;
  virtual?: boolean;
}

const CusSelect: React.FC<CusSelectProps> = memo(
  ({
    options,
    value,
    prefix = undefined,
    onChange,
    onSelect,
    onOpen = () => {},
    loading = false,
    disabled = false,
    fw = 600,
    dw = 0,
    w = '100%',
    placeholder = '',
    isFilter = false,
    virtual = false,
  }) => {
    const [open, setOpen] = useState(false);

    return (
      <ConfigProvider
        theme={{
          token: {
            // colorBorder: '#d9d9d9',
            // borderRadius:6,
            // borderRadiusLG: 8,
            // borderRadiusSM: 4,
            // fontSize:14,
            // fontSizeLG: 16,
            // fontSizeSM: 12,
            // colorText: 'rgba(0, 0, 0, 0.88)',
            // colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
            // paddingSM: 12,
            // paddingXS: 8,
            // paddingXXS: 4,
            // colorPrimaryHover: '#4096ff',
            // colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
            // colorBgContainer: '#ffffff',
          },
          components: {
            Select: {
              // selectorBg: '#ffffff',
              // optionFontSize: 14,
              // optionHeight: 32,
              // optionActiveBg: 'rgba(0, 0, 0, 0.04)',
              // optionPadding: '5px 12px',
              // optionSelectedBg: '#e6f4ff',
              // optionSelectedColor: 'rgba(0, 0, 0, 0.88)',
              // optionSelectedFontWeight: 600,
              // singleItemHeightLG: 40,
              // selectorBg: '#ffffff',
            },
          },
        }}
      >
        <Select
          value={value}
          options={options}
          virtual={virtual}
          showSearch={isFilter}
          optionFilterProp="label"
          onChange={onChange && onChange}
          onSelect={onSelect && onSelect}
          loading={loading}
          disabled={disabled}
          popupMatchSelectWidth={dw === 0 ? true : dw}
          size="large"
          placeholder={placeholder}
          dropdownStyle={{
            padding: '16px 8px',
            borderRadius: 12,
          }}
          labelRender={(label) => (
            <Flex gap={8} align="center">
              {prefix}
              {label.label}
            </Flex>
          )}
          optionRender={(option) => {
            return (
              <Flex justify="space-between" align="center">
                <Flex vertical justify="center">
                  <span>{option.label}</span>
                </Flex>
                {/* {option.data.value === value && <IconCheck />} */}
              </Flex>
            );
          }}
          onDropdownVisibleChange={(open) => {
            setOpen(open);
            onOpen();
          }}
          suffixIcon={
            loading ? (
              <LoadingOutlined />
            ) : (
              <IconArrow
                style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            )
          }
          css={cssSelect(w, fw)}
        />
      </ConfigProvider>
    );
  }
);

export { CusSelect };

export const cssSelect = (w: string, fw: number) => css`
  width: ${w};
  /* .ant-select-selector {
    .ant-select-selection-item {
      font-weight: ${fw};
    }
  }
  :is(.ant-select-status-error, .ant-select-focused, ) {
    .ant-select-selector {
      background: transparent !important;
      border-width: 1.5px !important;
    }
  }
  :is(.ant-select-focused) {
    .ant-select-selector {
      border: 1px solid var(--any-grey-40);
    } */
  }
`;
