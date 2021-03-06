// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CheckCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CheckCircleFilledSvg}></AntdIcon>;
};

CheckCircleFilled.displayName = 'CheckCircleFilled';
CheckCircleFilled.inheritAttrs = false;
export default CheckCircleFilled;