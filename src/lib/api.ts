const DEV_API = "http://localhost:3002";

//Check if email exist
export const checkEmail = async (email) => {
  const res = await fetch(DEV_API + "/exist" + "?email=" + email);
  const { find } = await res.json();
  return find;
};

//Auth and save token in localStorage
export const auth = async (email: string, password: string) => {
  const request = await fetch(DEV_API + "/auth/token", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await request.json();
  if (response.token) {
    localStorage.setItem("token", response.token);
    return response.token;
  }
};

//Sign Up
export const signUp = async (
  email: string,
  password: string,
  fullname: string
) => {
  const request = await fetch(DEV_API + "/auth", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      fullname,
    }),
  });
  const response = await request.json();
  return response;
};

//Get token from local-storage
export const getToken = () => {
  return localStorage.getItem("token");
};

//Get my data
export async function getMe() {
  const token = getToken();
  if (token) {
    const res = await fetch(DEV_API + "/me", {
      method: "get",
      headers: {
        Authorization: token ? "bearer " + token : null,
      },
    });
    return await res.json();
  } else {
    return null;
  }
}

//Update my data
export const update = async (fullname?: string, password?: string) => {
  const token = getToken();
  if (token) {
    await fetch(DEV_API + "/me", {
      method: "put",
      headers: {
        "content-type": "application/json",
        Authorization: token ? "bearer " + token : null,
      },
      body: JSON.stringify({
        password,
        fullname: fullname,
      }),
    });
    return { ok: true };
  } else {
    return null;
  }
};

//Get pets around me
export const getPets = async (coord) => {
  const { latitude, longitude } = coord;
  const allPets = await fetch(
    `${DEV_API}/pets?lat=${latitude}&lng=${longitude}`
  );
  return allPets.json();
};

//Report pet missed around me
export const newReport = async (data) => {
  const newReport = await fetch(DEV_API + "/pets/report", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return newReport.json();
};

//Get coord by place
export const getCoord = async (query) => {
  const data = await fetch(
    `https://us1.locationiq.com/v1/search.php?key=pk.bf4604bc2b3ea328e732de26a4387fa9&q=${query}&format=json`
  ).then((r) => r.json());

  const lat = parseFloat(data[0].lat);
  const lon = parseFloat(data[0].lon);
  return { lat, lon };
};

//Create new missed pet
export const createPet = async (petData) => {
  const token = getToken();
  const newPet = await fetch(DEV_API + "/pets", {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization: token ? "bearer " + token : null,
    },
    body: JSON.stringify(petData),
  });
  return newPet.json();
};

//Update my missed pet
export const updatePet = async (petData) => {
  const token = getToken();
  const petUpdate = await fetch(DEV_API + "/pets/" + petData.id, {
    method: "put",
    headers: {
      "content-type": "application/json",
      Authorization: token ? "bearer " + token : null,
    },
    body: JSON.stringify(petData),
  });
  return petUpdate.json();
};

//Get my missed pets
export const getMyPets = async () => {
  const token = getToken();
  const myPets = await fetch(DEV_API + "/me/pets", {
    method: "get",
    headers: {
      Authorization: token ? "bearer " + token : null,
    },
  });
  return await myPets.json();
};
