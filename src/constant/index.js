import {
  Banana_Desert,
  Banana_Desert2,
  Potato_Soup,
  Potato_Soup2,
} from "assets/image";
export const menu = {
  1: {
    id: "1",
    title: "دسر موز",
    image_1: Banana_Desert,
    image_2: Banana_Desert2,
    tag: "سریع",
    voite: "26",
    materials: {
      موز: "3 عدد",
      شیر: "2 لیوان",
      پودرژلاتین: "2 1/2 قاشق غذاخوری",
      وانیل: "1/3 قاشق چایخوری",
      آب: "1 استکان",
      شکر: "100 گرم",
      خامه: "50 گرم",
    },
  },
  2: {
    id: "2",
    title: "سوپ سیب زمینی",
    image_1: Potato_Soup,
    image_2: Potato_Soup2,
    tag: "آرام پز",
    voite: "22",
    materials: {
      "گوشت مرغ (فیله مرغ)": "300 گرم",
      "پودر نشاسته": "به مقدار لازم",
      "سویا سس": "21 گرم",
      "پودر زنجبیل": "2.35 گرم",
      "روغن مایع معمولی": "به مقدار لازم",
    },
  },
};
export const cookToday = {
  ناهار: [menu[1], menu[2]],
  شام: [menu[2], menu[1]],
};

export const voite = {
  ناهار: [menu[1], menu[2], menu[1], menu[2]],
  شام: [menu[2], menu[1], menu[2], menu[1]],
};
