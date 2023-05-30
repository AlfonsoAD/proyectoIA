"use client";
import React, { useState, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";

const SpinnerLoad = ({ show }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(show);
  }, []);

  return isLoading ? (
    <div className="overlay">
      <Spinner />
    </div>
  ) : null;
};

export default SpinnerLoad;
