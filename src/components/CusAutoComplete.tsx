/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  AutoComplete,
  AutoCompleteProps,
  ConfigProvider,
  Flex,
  Input,
} from 'antd';
import { CusSpin } from 'components/index';
import { FC, ReactNode, useState } from 'react';

interface ICusAutoCompleteProps {
  value: string;
  size?: 'large' | 'middle' | 'small';
  allowClear?: boolean;
  backfill?: boolean;
  disabled?: boolean;
  placeholder?: string;
  prefix?: ReactNode | null;
  borderRadius?: string;
  onSelect?: (value: string) => void;
  onChange: (value: string) => void;
  onClear?: () => void;
}

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

export const CusAutoComplete: FC<ICusAutoCompleteProps> = ({
  value = '',
  allowClear = true,
  backfill = true,
  disabled = false,
  placeholder = '',
  prefix = null,
  borderRadius = '57px',
  onSelect = () => {},
  onChange = () => {},
  onClear = () => {},
}) => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSearch = (text: string) => {
    setLoading(true);
    setOptions(getPanelValue(text));
    setLoading(false);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          // controlHeightLG: 50,
          // borderRadiusLG: 57,
          colorText: 'var(--any-grey-70)',
          colorTextPlaceholder: 'var(--any-grey-40)',
          colorBorder: 'var(--any-grey-30)',
        },
        components: {
          Select: {
            // optionFontSize: 14,
            // singleItemHeightLG: 50,
            optionHeight: 40,
            optionPadding: '8px 8px',
            optionActiveBg: 'var(--any-grey-10)',
            optionSelectedBg: 'var(--any-primary-30)',
            optionSelectedColor: 'var(--any-grey-70)',
            // optionSelectedFontWeight:600
          },
        },
      }}
    >
      <AutoComplete
        value={value}
        options={options}
        // popupMatchSelectWidth={500}
        allowClear={allowClear}
        backfill={backfill}
        disabled={disabled}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        onClear={onClear}
        notFoundContent={
          loading ? (
            <Flex justify={'center'} align={'center'} style={{ height: 100 }}>
              <CusSpin spinning={true} size="default" h={100} />
            </Flex>
          ) : undefined
        }
        dropdownRender={(menus: any) => {
          return (
            <Flex
              vertical
              style={{
                borderRadius: 12,
              }}
            >
              {menus}
            </Flex>
          );
        }}
        css={cssCusAutoComplete(borderRadius)}
      >
        <Input placeholder={placeholder} prefix={prefix} />
      </AutoComplete>
    </ConfigProvider>
  );
};

const cssCusAutoComplete = (borderRadius:string) => css`
  width: 100%;
  height: 50px !important;
  .ant-select-selector {
    height: 100% !important;
    .ant-select-selection-search-input {
      height: 100% !important;
      border-radius: ${borderRadius} !important;
      input {
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
      }
    }
  }
`;
