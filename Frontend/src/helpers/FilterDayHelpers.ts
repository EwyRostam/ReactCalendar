import { DayRes } from "../api/daysAPI/Types";
import { Feeling } from "../api/emotoinsAPI/Types";

export const getEmotionsList = (result: DayRes): Feeling[] => {
  if (result) {
    const { emotions } = result as DayRes;
    const { $values } = emotions;
    return $values;
  }
  return [];
};
