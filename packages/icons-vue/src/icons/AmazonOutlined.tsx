// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AmazonOutlinedSvg from '@ant-design/icons-svg/lib/asn/AmazonOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AmazonOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AmazonOutlinedSvg}></AntdIcon>;
};

AmazonOutlined.displayName = 'AmazonOutlined';
AmazonOutlined.inheritAttrs = false;
export default AmazonOutlined;