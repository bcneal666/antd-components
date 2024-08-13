/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ConfigProvider, Typography } from 'antd';
import { FC, ReactNode } from 'react';

interface ICusTextProps {
  text: string | number | ReactNode;
  size?: number;
  color?: string;
  weight?: number;
  prefix?: string;
  italic?: boolean;
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  copyable?: boolean;
  editable?: boolean;
  isDelete?: boolean;
  disabled?: boolean;
  ellipsis?: boolean;
  marginBlock?: string;
  onClick?: () => void;
}

export const CusText: FC<ICusTextProps> = ({
  text = '',
  size = 14,
  color = 'var(--grey-70)',
  weight = 400,
  prefix = '',
  italic = false,
  mark = false,
  code = false,
  underline = false,
  copyable = false,
  editable = false,
  isDelete = false,
  disabled = false,
  ellipsis = true,
  marginBlock = '0px 0px',
  onClick = () => {},
}) => {
  const { Text } = Typography;
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: size,
          colorText: color,
        },
        components: {
          Typography: {
            // titleMarginBottom:'0.5em',
            // titleMarginTop:'1.2em'
          },
        },
      }}
    >
      <Text
        code={code}
        mark={mark}
        italic={italic}
        underline={underline}
        copyable={copyable}
        editable={editable}
        delete={isDelete}
        disabled={disabled}
        ellipsis={ellipsis}
        css={cssCusText(weight, marginBlock)}
        onClick={onClick}
      >
        {prefix}
        {typeof text === 'number' ? formatNum(text) : text}
      </Text>
    </ConfigProvider>
  );
};

export const formatNum = (v: number) => {
  return (
    v &&
    v.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true,
    })
  );
};

const cssCusText = (weight: number, marginBlock: string) => css`
  width: 100%;
  font-weight: ${weight};
  margin-block: ${marginBlock} !important;
  p {
    font-variant-numeric: tabular-nums;
  }
  ul {
    list-style-type: disc;
    li {
      margin-bottom: 16px;
    }
  }
`;
