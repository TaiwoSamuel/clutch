"use server";
import axios from "axios";
import { ContributorsType } from "@/typings";

const apiUrl = `https://api.github.com/`;
const owner = "realemmanuel";
const repo = "clutch";
const token = process.env.GITHUB_TOKEN_KEY;

export const fetchAllContributors = async (): Promise<ContributorsType[]> => {
  try {
    const response = await axios.get(
      `${apiUrl}repos/${owner}/${repo}/contributors`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        params: {
          anon: "true",
          per_page: 100,
          page: 1,
        },
      }
    );
    return response?.data;
  } catch (error) {
    throw new Error("Error fetching contributors");
  }
};