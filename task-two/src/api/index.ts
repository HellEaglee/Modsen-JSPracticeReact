import axios from "axios";

export const getDogData = async (signal: AbortSignal) => {
  try {
    const response = await axios.get(
      "https://dog.ceo/api/breeds/image/random",
      {
        signal: signal,
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Fetch data Error:", error);
    throw error;
  }
};
