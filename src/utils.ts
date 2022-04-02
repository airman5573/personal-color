import { springOrAutumnColorCode, summerOrWinterColorCode } from './constants';
import { ColorType } from './types';

export const getColorType = (responses: Array<number>) => {
  const coolOrWarm = [0, 0];
  const part1 = responses.slice(1, 7);
  const part2 = responses.slice(8, responses.length);

  part1.forEach((choice) => {
    coolOrWarm[choice - 1] += 1;
  });
  const isCool = coolOrWarm[0] > coolOrWarm[1];

  let colorType: ColorType = isCool ? ColorType.Cool : ColorType.Warm;

  const isFinish = part2.every((choice) => choice > 0);

  if (isFinish) {
    const colorCode = part2.join('');
    colorType = isCool
      ? summerOrWinterColorCode[colorCode]
      : springOrAutumnColorCode[colorCode];
  }
  return colorType;
};

export const resetArrFrom = (_arr: Array<number>, _from: number) => {
  const arr = [..._arr];
  for (let i = _from; i < arr.length; i += 1) {
    arr[i] = 0;
  }
  return arr;
};

export const getMaxWidth = (width: number, height: number): number => {
  if (!width || !height) return 640;
  const $body = document.querySelector('body') as HTMLElement;
  if (!$body) return 640;
  const maxWidth = Math.floor(($body.clientHeight / height) * width);
  return maxWidth;
};
