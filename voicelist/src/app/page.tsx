"use client";

import React, { Component } from "react";
import image from "../images/delete.png";
const DELETEICON = image.src;

export default function Home() {
  console.log(image);
  return (
    <div id ="voicelist-home">
      <h1>VoiceList</h1>
      <CategoryList />
    </div>
  );
}

function CategoryList() {
  return (
    <div id="category-list">
      <h2 id="category-list-title">Categories</h2>
      <CategorySearchBar />
      <CategoryRow />
      <CategoryRow />
    </div>
  );
}

function CategorySearchBar() {
  return (
    <form id="category-search-bar">
      <input type="text" placeholder="Search..." />
    </form>
  );
}

function CategoryRow() {
  return (
    <div className="category-row">
      <h3>[Category Name]</h3>
      <DeleteIcon />
    </div>
  );
}

function DeleteIcon() {
  return (
    <div>
      <button className="delete-icon">
        <img src={DELETEICON} alt="Delete" />
      </button>
    </div>
  );
}


