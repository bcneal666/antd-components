/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ConfigProvider, Modal } from 'antd';
import { FC, ReactNode } from 'react';

interface ICusModalProps {
  open?: boolean;
  title?: string | undefined;
  centered?: boolean;
  closable?: boolean;
  closeIcon?: boolean;
  destroyOnClose?: boolean;
  content?: ReactNode | undefined;
  footer?: ReactNode | null;
  keyboard?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  width?: number;
  onCancel?: () => void;
  afterOpenChange?: () => void;
}

export const CusModal: FC<ICusModalProps> = ({
  open = false,
  title = null,
  centered = true,
  closable = true,
  closeIcon = false,
  destroyOnClose = true,
  content = undefined,
  footer = null,
  keyboard = true,
  mask = true,
  maskClosable = true,
  width = 550,
  onCancel = () => {},
  afterOpenChange = () => {},
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadiusLG: 20,
        },
        components: {
          Modal: {
            /* 这里是你的组件 token */
          },
        },
      }}
    >
      <Modal
        open={open}
        title={<div style={{ height: 30 }}>{title}</div>}
        centered={centered}
        closable={closable}
        // closeIcon
        destroyOnClose={destroyOnClose}
        footer={footer}
        keyboard={keyboard}
        mask={mask}
        maskClosable={maskClosable}
        width={width}
        onCancel={onCancel}
        afterOpenChange={afterOpenChange}
        css={cssModal}
      >
        {content}
      </Modal>
    </ConfigProvider>
  );
};

const cssModal = css``;
