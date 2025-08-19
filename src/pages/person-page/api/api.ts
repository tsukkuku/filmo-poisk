import { api } from "@/shared/api";
import type { PersonDetails } from "./types";

const personApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPerson: build.query<PersonDetails, string>({
      query: (id) => ({
        url: `api/v1/staff/${id}`,
      }),
    }),
  }),
});

export const { useGetPersonQuery } = personApi;
