import { Button, ConfigProvider } from 'antd';
import { FC, ReactNode } from 'react';
interface ICusButtonProps {
  text?: string;
  size?: 'large' | 'middle' | 'small';
  isBlock?: boolean;
  loading?: boolean;
  disabled?: boolean;
  type?: 'primary' | 'default' | 'dashed' | 'link' | 'text';
  isDanger?: boolean;
  htmlType?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  icon?: ReactNode | null;
  iconPosition?: 'start' | 'end';
  shape?: 'default' | 'circle' | 'round';
}

export const CusButton: FC<ICusButtonProps> = ({
  text = 'NA',
  size = 'large',
  isBlock = false,
  loading = false,
  disabled = false,
  type = 'primary',
  isDanger = false,
  htmlType = 'button',
  onClick = () => {},
  icon = null,
  iconPosition = 'start',
  shape = 'default',
}) => {
  return (
    <ConfigProvider
      //   wave={{ disabled: true }}
      theme={{
        token: {},
        components: {
          Button: {
            // contentFontSizeSM: 14,
            // contentFontSize: 14,
            // contentFontSizeLG: 16,
            // contentLineHeightSM: 1.5714285714285714,
            // contentLineHeight: 1.5714285714285714,
            // contentLineHeightLG: 1.5,
            // dangerColor: "#ffffff",
            // dangerShadow: "0 2px 0 rgba(255, 38, 5, 0.06)",
            // defaultActiveBg: "#ffffff",
            // defaultActiveBorderColor: "#0958d9",
            // defaultActiveColor: "#0958d9",
            // defaultBg: "#ffffff",
            // defaultBorderColor: "#d9d9d9",
            // defaultColor: "rgba(0, 0, 0, 0.88)",
            // defaultGhostBorderColor: "#ffffff",
            // defaultGhostColor: "#ffffff",
            // defaultHoverBg: "#ffffff",
            // defaultHoverBorderColor: "#4096ff",
            // defaultHoverColor: "#4096ff",
            // defaultShadow: "0 2px 0 rgba(0, 0, 0, 0.02)",
            // fontWeight: 400,
            // ghostBg: "transparent",
            // groupBorderColor: "#4096ff",
            // linkHoverBg: "transparent",
            // onlyIconSize: 16,
            // onlyIconSizeLG: 18,
            // onlyIconSizeSM: 14,
            // paddingBlock: 4,
            // paddingBlockLG: 7,
            // paddingBlockSM: 0,
            // paddingInline: 15,
            // paddingInlineLG: 15,
            // paddingInlineSM: 7,
            // primaryColor: "#fff",
            // primaryShadow: "0 2px 0 rgba(5, 145, 255, 0.1)",
            // textHoverBg: "rgba(0, 0, 0, 0.06)",
          },
        },
      }}
    >
      <Button
        autoInsertSpace
        size={size}
        block={isBlock}
        icon={icon}
        iconPosition={iconPosition}
        shape={shape}
        type={type}
        danger={isDanger}
        htmlType={htmlType}
        loading={loading}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </Button>
    </ConfigProvider>
  );
};
