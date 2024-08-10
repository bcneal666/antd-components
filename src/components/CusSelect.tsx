/** @jsxImportSource @emotion/react */
import { LoadingOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { ConfigProvider, Flex, Select } from 'antd';
import { ReactComponent as IconArrow } from 'assets/arrow-select.svg';
import { ReactComponent as IconCheck } from 'assets/check.svg';
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
  fontSize?: number;
  fw?: number;
  dw?: number;
  w?: string;
  h?: number;
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
    fontSize = 16,
    fw = 600,
    dw = 0,
    w = '100%',
    h = 50,
    placeholder = '',
    isFilter = false,
    virtual = false,
  }) => {
    const [open, setOpen] = useState(false);

    return (
      <ConfigProvider
        theme={{
          token: {
            // colorBorder: 'var(--any-grey-30)',
            // borderRadiusLG: 57,
            fontSizeLG: fontSize,
            // colorText: 'var(--any-grey-70)',
            // colorTextPlaceholder: 'var(--any-grey-40)',
            // paddingSM: 15,
            // colorPrimaryHover: undefined,
            // colorBgContainerDisabled: 'var(--grey-10)',
            // colorBgContainer: 'var(--grey-00)',
          },
          components: {
            Select: {
              // selectorBg: 'var(--grey-20)',
              // optionFontSize: fontSize,
              // optionHeight: 40,
              // optionActiveBg: 'var(--any-grey-10)',
              // optionPadding: '8px 8px',
              // optionSelectedBg: 'var(--any-primary-30)',
              // optionSelectedColor: 'var(--any-grey-70)',
              optionSelectedFontWeight: fw,
              singleItemHeightLG: h,
              // selectorBg: 'var(--any-grey-00)',
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
                {option.data.value === value && <IconCheck />}
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
  .ant-select-selector {
    /* background: var(--grey-00) !important; */
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
    }
  }
`;
