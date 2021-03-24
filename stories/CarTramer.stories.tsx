import { Story } from '@storybook/react';
import CarTramer, { CarTramerProps } from '../components/CarTramer/CarTramer';

const color = {
  orginal: "fill: rgb(126, 201, 126);",
  painted: "fill: rgb(241, 223, 62);",
  localPainted: "fill: rgb(201, 159, 126);",
  changed: "fill: rgb(230, 19, 19);",
  undoAndAttach: "fill: rgb(126, 189, 201);",
  meekAndScratch: "fill: rgb(212, 57, 111);",
};
export default {
  title: 'CarTramer',
  component: CarTramer,
  argTypes: {
    rightBackFender: { control: { type: "object" }, defaultValue: { color: color.orginal, title: "orginal" } },
    backBonnet: { control: { type: "object" }, defaultValue: { color: color.painted, title: "painted" } },
    leftBackFender: { control: { type: "object" }, defaultValue: { color: color.localPainted, title: "Local Painted" } },
    rightBackDoor: { control: { type: "object" }, defaultValue: { color: color.changed, title: "Changed" } },
    rightFrontDoor: { control: { type: "object" }, defaultValue: { color: color.orginal, title: "Orginal" } },
    ceiling: { control: { type: "object" }, defaultValue: { color: color.undoAndAttach, title: "Undo and Attach" } },
    leftBackDoor: { control: { type: "object" }, defaultValue: { color: color.meekAndScratch, title: "Meek and Scratch" } },
    leftFrontDoor: { control: { type: "object" }, defaultValue: { color: color.painted, title: "painted" } },
    rightFrondFender: { control: { type: "object" }, defaultValue: { color: color.painted, title: "painted" } },
    engineBonnet: { control: { type: "object" }, defaultValue: { color: color.changed, title: "changed" } },
    leftFrondFender: { control: { type: "object" }, defaultValue: { color: color.undoAndAttach, title: "Undo and Attach" } },
    frontBuffer: { control: { type: "object" }, defaultValue: { color: color.orginal, title: "orginal" } },
    backBuffer: { control: { type: "object" }, defaultValue: { color: color.orginal, title: "orginal" } },

    rightBackFenderClick: { action: 'rightBackFenderClick' },
    backBonnetClick: { action: 'backBonnetClick' },
    backBufferClick: { action: 'backBufferClick' },
    leftBackFenderClick: { action: 'leftBackFenderClick' },
    rightBackDoorClick: { action: 'rightBackDoorClick' },
    rightFrontDoorClick: { action: 'rightFrontDoorClick' },
    ceilingClick: { action: 'ceilingClick' },
    leftBackDoorClick: { action: 'leftBackDoorClick' },
    leftFrontDoorClick: { action: 'leftFrontDoorClick' },
    rightFrondFenderClick: { action: 'rightFrondFenderClick' },
    engineBonnetClick: { action: 'engineBonnetClick' },
    leftFrondFenderClick: { action: 'leftFrondFenderClick' },
    frontBufferClick: { action: 'frontBufferClick' },

  },
};

const Template: Story<CarTramerProps> = (args) => <CarTramer {...args} />;

export const Primary = Template.bind({});
Primary.args = { text: 'CarTramer' };
