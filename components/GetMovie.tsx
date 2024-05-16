"use client";

import { Autocomplete, TextField } from "@mui/material";
import React from "react";

function GetMovie({ onSetMovie }: { onSetMovie: (movie: string) => void }) {
  const top100Films = [
    { label: "A Nightmare On Elm Street", year: 1994 },
    { label: "Finding Nemo", year: 1972 },
  ];

  const [value, setValue] = React.useState(top100Films[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <>
      {/* ========== MAIN CONTENT ========== */}
      <main
        id="content"
        className="h-screen relative max-w-3xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center sm:items-center mx-auto size-full before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2"
      >
        <div className="text-center py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="mt-1 sm:mt-3 text-4xl font-bold text-white sm:text-6xl">
            <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-400 text-transparent">
              Can I Watch This?
            </span>
          </h2>
          <h1 className="text-2xl text-white sm:text-4xl">
            Find out if a movie is ok for you and your family to watch
          </h1>
          <form>
            <div className="mt-8 space-y-4">
              <div>
                <label
                  htmlFor="hs-cover-with-gradient-form-name-1"
                  className="sr-only"
                >
                  Movie Name
                </label>
                <div className="relative">
                  <Autocomplete
                    value={value}
                    onChange={(_, newValue) => {
                      setValue(newValue!);
                    }}
                    inputValue={inputValue}
                    onInputChange={(_, newInputValue) => {
                      setInputValue(newInputValue);
                    }}
                    disablePortal
                    options={top100Films}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Movie"
                        InputLabelProps={{
                          style: { color: "#fff" },
                        }}
                        sx={{
                          // border: "1px solid blue",

                          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                            {
                              border: "1px solid #eee",
                            },
                          border: "1px solid white",
                          borderRadius: "5px",
                          "& input": {
                            color: "white",
                          },
                        }}
                        placeholder="Type your movie"
                      />
                    )}
                  />
                </div>
              </div>
              <div className="grid">
                <button
                  onClick={() => onSetMovie(value.label)}
                  type="submit"
                  className="sm:p-4 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Get Your Movie Guide
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
}

export default GetMovie;
