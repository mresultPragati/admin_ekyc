import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getAllRequests = async () => {
  // export const clientKYC = async (payload: any, contentType?: string) => {
  try {
    const response = await axiosInstance.get(`/api/getAllData`, {
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": contentType ? contentType : "application/json",
        // Authorization:
        //   "Basic QUNLMjQwOTI0MTcxODU1MTc5WkZERlFQSkJONTJIM1A6TzJXTEFKSzQzNjk2U05TQ1lYM1VXV0NGRklDU0VFMko=",
      },
    });
    console.log("KYC Service Response", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("eRRROR KYC Submission Failed:", error.message);
      if (error.response) {
        // Request made and server responded
        console.log("eRRROR Response data:", error.response.data);
        console.log("eRRROR Response status:", error.response.status);
      } else if (error.request) {
        // Request was made but no response received
        console.log("eRRROR Request data:", error.request);
      }
    } else {
      console.log("eRRROR Unexpected error:", error);
    }
    throw new Error(`KYC Submission Failed: ${error}`);
  }
};
