import axios from "axios";

const API_URL = "http://16.170.98.209:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createStudent = async (studentData) => {
  try {
    const response = await api.post("/students", studentData);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStudents = async () => {
  try {
    const response = await api.get("/students");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateStudent = async (studentId, studentData) => {
  try {
    const response = await api.put(`/students/${studentId}`, studentData);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStudent = async (studentId) => {
  try {
    const response = await api.delete(`/students/${studentId}`);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
