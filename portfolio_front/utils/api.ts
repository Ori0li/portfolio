import { CommentType } from "@/types/comment";
import { Project } from "@/types/project";
import axios from "axios";

const API_URL = "http://localhost:8080";

// 프로젝트

export const getAllProjects = async (): Promise<Project[]> => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data.data;
};

export const getProject = async (id: string): Promise<Project> => {
  const response = await axios.get(`${API_URL}/projects/${id}`);
  return response.data.data;
};

export const createProject = async (
  project: Pick<
    Project,
    "title" | "description" | "image" | "github" | "demo" | "tag"
  >
) => {
  const response = await axios.post(`${API_URL}/projects`, project);
  return response.data.data;
};

export const updateProject = async (id: string, project: Project) => {
  const response = await axios.put(`${API_URL}/projects/${id}`, project);
  return response.data.data;
};

export const deleteProject = async (id: string) => {
  const response = await axios.delete(`${API_URL}/projects/${id}`);
  return response.data.data;
};

// 댓글

export const getAllComments = async (): Promise<CommentType[]> => {
  const res = await axios.get(`${API_URL}/comments`);
  return res.data.data;
};

export const getComment = async (id: string): Promise<CommentType> => {
  const response = await axios.get(`${API_URL}/comments/${id}`);
  return response.data.data;
};

export const updateComment = async (id: string, comment: CommentType) => {
  const response = await axios.put(`${API_URL}/comments/${id}`, comment);
  return response.data.data;
};

export const createComment = async (
  comment: Pick<CommentType, "author" | "content" | "project">
) => {
  const response = await axios.post(`${API_URL}/comments`, comment);
  return response.data.data;
};

export const deleteComment = async (id: string) => {
  const response = await axios.delete(`${API_URL}/comments/${id}`);
  return response.data.data;
};
