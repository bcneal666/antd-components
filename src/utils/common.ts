// import dayjs from 'dayjs';
/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react';
// temp variables

export const onGoToUrl = (url: string) => {
  window.open(url, '_blank');
};

export const formatNumPrice = (v: number | null) => {
  return v !== null && v !== undefined
    ? `$ ${v
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        })
        .slice(1)}` // 移除自動生成的 '$'
    : '$0';
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

export const commonKeyframes = keyframes`
0% {
  opacity: 0;
  transform: translate3d(0px, 30px, 0px) scale3d(0.9, 0.9, 1);
}
100% {
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
}`;
