import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      //fulfilled
      return response.data;
    } catch (error) {
      //rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      //fulfilled
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      //rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      //fulfilled
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      //rejected
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
