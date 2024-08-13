/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ConfigProvider, Spin } from 'antd';
import { FC, ReactNode } from 'react';

interface ICusSpinProps {
  children?: ReactNode;
  delay?: number;
  fullscreen?: boolean;
  percent?: number | 'auto' | undefined;
  tip?: string | ReactNode | undefined;
  size?: 'small' | 'default' | 'large';
  spinning?: boolean;
}

export const CusSpin: FC<ICusSpinProps> = ({
  children,
  delay = 300,
  fullscreen = false,
  percent = undefined,
  tip = undefined,
  size = 'large',
  spinning = true,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorBgMask: 'rgba(0, 0, 0, 0.45)',
        },
        components: {
          Spin: {
            // contentHeight:400
            // dotSize:20,
            // dotSizeLG: 32,
            // dotSizeSM: 14,
          },
        },
      }}
    >
      <Spin
        delay={delay}
        fullscreen={fullscreen}
        percent={percent}
        size={size}
        spinning={spinning}
        tip={tip}
        css={cssSpin}
      >
        {children}
      </Spin>
    </ConfigProvider>
  );
};

const cssSpin = () => css`
`;
  /* ${!fullscreen ? 'margin-top: 40px' : ''} */
