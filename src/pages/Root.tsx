/** @jsxImportSource @emotion/react  */
import { css } from '@emotion/react';
import { Flex } from 'antd';
import { FC, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

interface IRootProps {}

const Root: FC<IRootProps> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/page1', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <Flex css={cssRoot}>
      <Outlet />
    </Flex>
  );
};
export default Root;

const cssRoot = css`
  width: 100%;
  height: 100%;
`;
