/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Image } from 'antd';
import { FC } from 'react';

interface ICusImageProps {
  src: string;
  alt?: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  borderRadius?: number;
  preview?: boolean;
  wh?: string;
  bg?: string;
  isScale?: boolean;
}

export const CusImage: FC<ICusImageProps> = ({
  src,
  alt = 'image',
  objectFit = 'cover',
  borderRadius = 0,
  preview = false,
  wh = '100%',
  bg = 'transparent',
  isScale = false,
}) => {
  return (
    <div css={cssCusImage(objectFit, borderRadius, wh, bg, isScale)}>
      <Image
        src={`${src}?${Date.now()}`}
        alt={alt}
        preview={preview}
        width="100%"
        height="100%"
        placeholder={
          <Image
            src={`${src}?x-oss-process=image/blur,r_50,s_50/quality,q_1`}
            preview={false}
            width="100%"
            height="100%"
          />
        }
        fallback="/img-fallback.png"
      />
    </div>
  );
};

const cssCusImage = (
  objectFit: string,
  borderRadius: number,
  wh: string,
  bg: string,
  isScale: boolean
) => css`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: ${wh};
  height: ${wh};
  overflow: hidden;
  border-radius: ${borderRadius}px !important;
  background: ${bg};
  img {
    transition: scale 0.2s ease-in-out 0s;
    object-fit: ${objectFit};
  }
  :hover {
    img {
      ${isScale ? 'scale: 1.1' : ''}
    }
  }
`;
