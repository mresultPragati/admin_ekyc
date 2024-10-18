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
    }
    throw new Error(`KYC Submission Failed: ${error}`);
  }
};

export const getDataByRequestId = async (req_id: string) => {
  try {
    const response = await axiosInstance.post(`/api/kyc-response/${req_id}`, {
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
    }
    throw new Error(`KYC Submission Failed: ${error}`);
  }
};

export const sendStatusRequest = async (req_id: string, status: string) => {
  try {
    const response = await axiosInstance.post(
      `/api/manage-approval/${req_id}?status=${status}`
    );
    // console.log("KYC Service Response", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("eRRROR KYC Submission Failed:", error.message);
    }
    throw new Error(`KYC Submission Failed: ${error}`);
  }
};
