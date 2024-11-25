import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiDiamondRing ,
  GiPartyFlags ,
  GiPartyPopper ,
  GiMusicalNotes ,
  GiClothes,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
  FaCameraRetro ,
  FaLaughSquint ,
  FaHandSparkles ,
  FaCocktail,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet, FaUtensils  } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets, MdFace3, MdBusinessCenter   } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  // {
  //   label: "All",
  //   icon: <BiWorld />,
  // },
  {
    img: "assets/marriageHall.jpg",
    label: "Marriage Halls",
    icon: <GiDiamondRing />,
    description: "Event Halls",
  },
  {
    img: "assets/catering.jpg",
    label: "Caterers",
    icon: <FaUtensils />,
    description: "Best food",
  },
  {
    img: "assets/decorator.jpg",
    label: "Decorators",
    icon: <GiPartyFlags  />,
    description: "Make your event beautiful",
  },
  {
    img: "assets/image.png",
    label: "Photographers",
    icon: <FaCameraRetro  />,
    description: "Capture your memories",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Makeup Artist",
    icon: <MdFace3  />,
    description: "Look amazing",
  },
  {
    img: "assets/island_cat.webp",
    label: "Party Halls",
    icon: <GiPartyPopper  />,
    description: "This property is on an island!",
  },
  {
    img: "assets/lake_cat.webp",
    label: "StandUp Halls",
    icon: <FaLaughSquint   />,
    description: "This property is near a lake!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Conference Halls",
    icon: <MdBusinessCenter  />,
    description: "This property has skiing activies!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Mhendi Artist",
    icon: <FaHandSparkles  />,
    description: "This property is an ancient castle!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Choreographers",
    icon: <GiMusicalNotes   />,
    description: "This property is in a spooky cave!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Dress Designers",
    icon: <GiClothes />,
    description: "This property offers camping activities!",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Bar Services",
    icon: <FaCocktail />,
    description: "This property is in arctic environment!",
  },
  // {
  //   img: "assets/desert_cat.webp",
  //   label: "Desert",
  //   icon: <GiCactus />,
  //   description: "This property is in the desert!",
  // },
  // {
  //   img: "assets/barn_cat.jpg",
  //   label: "Barns",
  //   icon: <GiBarn />,
  //   description: "This property is in a barn!",
  // },
  // {
  //   img: "assets/lux_cat.jpg",
  //   label: "Luxury",
  //   icon: <IoDiamond />,
  //   description: "This property is brand new and luxurious!",
  // },
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];
