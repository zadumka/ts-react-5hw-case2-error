import axios from 'axios';
import { Note } from '../types/note';

axios.defaults.baseURL = 'http://localhost:3030/api';
axios.defaults.headers.common.Authorization = `Bearer ${
  import.meta.env.VITE_NOTEHUB_TOKEN
}`;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (searchText: string, page: number) => {
  const response = await axios.get<FetchNotesResponse>('/notes', {
    params: {
      ...(searchText !== '' && { search: searchText }),
      page,
      perPage: 12,
    },
  });
  return response.data;
};

interface NewNoteContent {
  title: string;
  content?: string;
  tag: string;
}

export const createNote = async (newNote: NewNoteContent) => {
  const response = await axios.post<Note>('/notes', newNote);
  return response.data;
};

export const deleteNote = async (noteId) => {
  const response = await axios.delete<Note>(`/notes/${noteId}`);
  return response.data;
};
