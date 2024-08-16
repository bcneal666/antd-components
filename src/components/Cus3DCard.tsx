/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import { FC, ReactNode } from 'react';
// @ts-ignore
import Card from 'react-animated-3d-card';

interface ICus3DCardProps {
  children?: ReactNode;
}

export const Cus3DCard: FC<ICus3DCardProps> = ({ children }) => {
  return (
    <Card
      style={{
        backgroundColor: 'var(--any-primary-default)',
        width: '100%',
        height: '100%',
      }}
      shineStrength={0.3}
      // isStatic
      borderRadius={0}
    >
      {children}
    </Card>
  );
};
// const cssCus3DCard = css``;
