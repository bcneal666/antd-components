/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ConfigProvider, Typography } from 'antd';
import { FC, ReactNode } from 'react';

interface ICusParagraphProps {
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
  eiiRows?: number;
  ellTooltip?: string;
  marginBlock?: string;
  onClick?: () => void;
}

export const CusParagraph: FC<ICusParagraphProps> = ({
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
  eiiRows = 1,
  ellTooltip = '',
  marginBlock = '0px 0px',
  onClick = () => {},
}) => {
  const { Paragraph } = Typography;
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
      <Paragraph
        code={code}
        mark={mark}
        italic={italic}
        underline={underline}
        copyable={copyable}
        editable={editable}
        delete={isDelete}
        disabled={disabled}
        ellipsis={
          ellipsis
            ? {
                rows: eiiRows,
                tooltip: ellTooltip,
                expandable: false,
                symbol: 'more',
              }
            : false
        }
        css={cssCusText(weight, marginBlock)}
        onClick={onClick}
      >
        {prefix}
        {typeof text === 'number' ? formatNum(text) : text}
      </Paragraph>
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
