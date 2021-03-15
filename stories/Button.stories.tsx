import { Story } from '@storybook/react';
import CarTramer, {CarTramerProps} from '../components/CarTramer/CarTramer';

export default {
  title: 'CarTramer',
  component: CarTramer,
};

const Template: Story<CarTramerProps> = (args) => <CarTramer {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'CarTramer' };
