import axios from "axios";

//const BASE_URL = 'http://192.168.3.166:8080/api/onboarding';

export const individualOnboarding = async (data,url) => {
  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error in individualOnboarding API call:", error);
    throw error;
  }
};
