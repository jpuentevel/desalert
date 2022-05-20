import React, { createContext } from "react";

const rolContext = createContext();

export const rolProvider = rolContext.Provider;
export const rolConsumer = rolContext.Consumer;

export default rolContext;