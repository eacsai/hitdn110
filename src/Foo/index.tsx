import React from 'react';
interface IABSFooProps {
  title: string;
  /**设置按钮载入状态 */
  loading?: boolean;
  /**
   * 设置危险按钮
   * @default false
   */
  danger?: boolean;
  className?: string;
  /**按钮类型 */
  style?: React.CSSProperties;
  /**设置按钮的图标组件 */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /**
   * 按钮失效状态
   * @default false
   */
  disabled?: boolean;
  block?: boolean;
  large?: boolean;
  /**按钮颜色 */
  color?: 'blue' | 'red' | 'yellow' | 'green' | 'white';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default ({ title }: IABSFooProps) => <h1>{title}</h1>;
