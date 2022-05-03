import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
  atom,
} from "recoil";
import { getPets, getMe, getMyPets } from "lib/api";
import useSWR from "swr";

//Geo
export const lastGeoState = atom({
  key: "lastGeoState",
  default: {},
});
export const lastGeoValue = () => useRecoilValue(lastGeoState);
export const useLastGeo = () => {
  const positionLocalStorage = localStorage.getItem("position");
  return JSON.parse(positionLocalStorage);
};

//Pets
export const usePets = () => {
  const { data, mutate } = useSWR(["/pets"], async () => {
    const coord = useLastGeo();
    const pets = await getPets(coord);
    return pets.allPets;
  });
  return { pets: data, pullPets: mutate };
};

export const useMyPets = () => {
  const { data, mutate } = useSWR(["/me/pets"], async () => {
    const pets = await getMyPets();
    return pets.myPets;
  });
  return { myPets: data || [], pullPets: mutate };
};

//Report
const reportPetState = atom({
  key: "reportPet",
  default: {
    petId: 0,
    userId: 0,
    petName: "",
    reporter_name: "",
    phone_number: "",
    message: "",
  },
});
export const reportValue = () => useRecoilValue(reportPetState);
export const reportState = () => useSetRecoilState(reportPetState);

//Menu
const menuOpen = atom({
  key: "menuOpen",
  default: false,
});
export const menuValue = () => useRecoilValue(menuOpen);
export const menuState = () => useSetRecoilState(menuOpen);

//Email
const userEmail = atom({
  key: "userEmail",
  default: "",
});
export const useUserEmail = () => useRecoilState(userEmail);

//Route
const route = atom({
  key: "route",
  default: "",
});
export const routeValue = () => useRecoilValue(route);
export const setRoute = () => useSetRecoilState(route);

//Logout
export const logOut = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

//Me
export const useMe = (): any => {
  const { data: me, mutate } = useSWR("/me", getMe, {
    dedupingInterval: 10000,
  });
  return {
    me,
    pullMe: mutate,
  };
};

//Update
const updateState = atom({
  key: "update",
  default: false,
});
export const useUpdate = () => useRecoilState(updateState);

//Photo
const photo = atom({
  key: "photo",
  default: {
    preview: null,
  },
});
export const usePhoto = () => useRecoilState(photo);

//MyPets
const myPet = atom({
  key: "myPet",
  default: null,
});
export const updatePetState = () => useRecoilState(myPet);
