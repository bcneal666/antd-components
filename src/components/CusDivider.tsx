/** @jsxImportSource @emotion/react  */
import { css } from '@emotion/react';
import { ConfigProvider, Divider } from 'antd';
import { FC } from 'react';

interface ICusDividerProps {
  dashed?: boolean;
  orientation?: 'left' | 'right' | 'center';
  type?: 'horizontal' | 'vertical';
  horizontalMarginBlock?: number;
}

export const CusDivider: FC<ICusDividerProps> = ({
  dashed = false,
  orientation = 'center',
  type = 'horizontal',
  horizontalMarginBlock = 24,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorSplit: 'rgba(5, 5, 5, 0.06)',
        },
        components: {
          Divider: {
            // orientationMargin: 0.05,
            // textPaddingInline: '1em',
            // verticalMarginInline: 8,
          },
        },
      }}
    >
      <Divider
        type={type}
        dashed={dashed}
        orientation={orientation}
        css={cssCusDivider(type, horizontalMarginBlock)}
      />
    </ConfigProvider>
  );
};

const cssCusDivider = (
  type: 'horizontal' | 'vertical',
  horizontalMarginBlock: number
) => css`
  ${type === 'horizontal' ? `margin-block: ${horizontalMarginBlock}px 0;` : ''};
`;
