"use client";
import { Button } from "@/components";
import React from "react";

function Error({ error }: { error: Error }) {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='border border-red-400 p-5 rounded-lg text-center'>
        <h2 className='text-red-600 mb-4 '>Unhandled Error</h2>
        <p className='text-red-600 mb-4'>Error: {error.message} </p>
      </div>
    </div>
  );
}

export default Error;
