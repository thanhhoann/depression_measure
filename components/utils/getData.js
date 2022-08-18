import thanhhoanProfile from "../../public/thanhhoan_profile.jpeg";
import thanhhoanBackground from "../../public/thanhhoan_background.jpg";
import hoangkhoanhProfile from "../../public/hoangkhanh_profile.jpeg";
import hoangkhoanhBackground from "../../public/hoangkhanh_background.jpeg";
import minhthongProfile from "../../public/minhthong_profile.jpeg";
import minhthongBackground from "../../public/minhthong_background.jpeg";
import phuongkhanhProfile from "../../public/phuongkhanh_profile.jpeg";
import phuongkhanhBackground from "../../public/phuongkhanh_background.jpeg";
import ducthinhProfile from "../../public/ducthinh_profile.jpeg";
import ducthinhBackground from "../../public/ducthinh_background.jpeg";
import hoangtuProfile from "../../public/hoangtu_profile.jpeg";
import hoangtuBackground from "../../public/hoangkhanh_background.jpeg";

export default function getData() {
  return [
    {
      name: "Thanh Hoàn",
      phone_number: "0344443549",
      bank_name: "BIDV",
      bank_account: "14110000482809",
      profile_img: thanhhoanProfile,
      background_img: thanhhoanBackground,
      title: "cơ thủ",
      birth: "1207",
    },
    {
      name: "Hoàng Khánh",
      phone_number: "0888305887",
      bank_name: "MB",
      bank_account: "0354518887",
      profile_img: hoangkhoanhProfile,
      background_img: hoangkhoanhBackground,
      title: "cơ thủ",
      birth: "1508",
    },
    {
      name: "Phương Khanh",
      phone_number: "0376764402",
      bank_name: "BIDV",
      bank_account: "22222222",
      profile_img: phuongkhanhProfile,
      background_img: phuongkhanhBackground,
      title: "cơ thủ",
      birth: "3207",
    },
    {
      name: "Minh Thông",
      phone_number: "0866955840",
      bank_name: "MB",
      bank_account: "22222222",
      profile_img: minhthongProfile,
      background_img: minhthongBackground,
      title: "cơ thủ",
      birth: "1209",
    },
    {
      name: "Đức Thịnh",
      phone_number: "0356524245",
      bank_name: "BIDV",
      bank_account: "22222222",
      profile_img: ducthinhProfile,
      background_img: ducthinhBackground,
      title: "cơ thủ",
      birth: "0701",
    },
    {
      name: "Hoàng Tú",
      phone_number: "0336549849",
      bank_name: "BIDV",
      bank_account: "22222222",
      profile_img: hoangtuProfile,
      background_img: hoangtuBackground,
      title: "cơ thủ",
      birth: "6207",
    },
  ];
}
