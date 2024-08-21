import { Properties } from "@/types/types";
import axios, { AxiosResponse } from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchProperties(): Promise<Properties> {
  try {
    //incase if the api domain is not available
    if (!apiDomain) {
      return [];
    }

    const res: AxiosResponse<Properties> = await axios.get(
      `${apiDomain}/properties`
    );
    return res.data;
  } catch (err) {
    console.log("Err while fetching the properties Err is ", err);
    throw err;
  }
}

export async function fetchSingleProperty(pid: string) {
  try {
    if (!apiDomain) {
      return null;
    }
    const res = await axios.get(`${apiDomain}/properties/${pid}`);
    return res.data;
  } catch (error) {
    console.log("Err while fetching the single property. Err is ", error);
    throw error;
  }
}
