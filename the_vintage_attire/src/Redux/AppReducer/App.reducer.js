import React from "react";
import {
  HOME_FAILURE,
  HOME_REQUEST,
  HOME_SUCCESS,
  KIDS_REQUEST,
  KIDS_SUCCESS,
  KIDS_FAILURE,
  MEN_FAILURE,
  MEN_REQUEST,
  MEN_SUCCESS,
  WOMEN_FAILURE,
  WOMEN_REQUEST,
  WOMEN_SUCCESS,
} from "./App.actionTypes";
const initialState = {
  isError: false,
  data: [],
  isLoading: false,
  isMenLoading:false
};

const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MEN_SUCCESS: {
      return { ...state, isError: false, data: payload, isMenLoading: false };
    }
    case MEN_FAILURE: {
      return { ...state, isError: true, isMenLoading: false };
    }
    case MEN_REQUEST: {
      return { ...state, isMenLoading: true, isError: false };
    }
    case WOMEN_SUCCESS: {
      return { ...state, isError: false, data: payload, isLoading: false };
    }
    case WOMEN_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }
    case WOMEN_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case KIDS_SUCCESS: {
      return { ...state, isError: false, data: payload, isLoading: false };
    }
    case KIDS_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }
    case KIDS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case HOME_SUCCESS: {
      return { ...state, isError: false, data: payload, isLoading: false };
    }
    case HOME_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }
    case HOME_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    default: {
      return state;
    }
  }
  return state;
};

export default AppReducer;
