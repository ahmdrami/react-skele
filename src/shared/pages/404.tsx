import * as React from 'react';

interface IProps {
  staticContext: { status: number };
}

const NotFound: React.SFC<IProps> = ({ staticContext = {} }) => {
  (staticContext as any).status = 404;
  return <div>404 page</div>;
};

export default NotFound;
