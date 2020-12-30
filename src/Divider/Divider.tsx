import React from 'react';
import classnames from 'classnames';

export interface IProps {
  type?: 'horizontal' | 'split';
  className?: React.ReactNode;
  dashed?: boolean;
  style?: React.CSSProperties;
}

const Divider = React.memo((props: IProps) => {
  const { type = 'horizontal', className, dashed, ...restProps } = props;

  const classValue = classnames(
    className,
    'sys-divider',
    `sys-divider-${type}`,
    dashed && 'sys-divider-dashed',
  );
  return <div className={classValue} {...restProps} />;
});

export default Divider;
