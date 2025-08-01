"use client";

import React, { Component } from "react";
import image from "../images/delete.png";
import sortDownArrow from "../images/sort-down.png";
import sortUpArrow from "../images/sort-up.png";

const SORTDOWNARROW = sortDownArrow.src;
const SORTUPARROW = sortUpArrow.src;
const DELETEICON = image.src;

function DeleteIcon() {
  return (
    <div>
      <button className="delete-icon">
        <img src={DELETEICON} alt="Delete" />
      </button>
    </div>
  );
}

function CategoryRow() {
  return (
    <tr>
      <td>[Category Name]</td>
      <td>[Date of Creation]</td>
      <td><DeleteIcon /></td>
    </tr>
  );
}

function SortUpArrow() {
  return (
    <div className="sort-arrow">
      <img src={SORTUPARROW} alt="Sort Up" />
    </div>
  )
}

function SortDownArrow() {
  return (
    <div className="sort-arrow">
      <img src={SORTDOWNARROW} alt="Sort Down" />
    </div>
  )
}

function CreationDateFilter() {
  return (
    <div id="creation-date-filter">
      <h3>Date</h3>
      <SortDownArrow />
    </div>
  )
}

function NameFilter() {
  return (
    <div id="name-filter">
      <h3>Name</h3>
      <SortDownArrow />
    </div>
  )
}

function CategoryTable() {
  return (
    <table>
      <thead>
        <tr>
          <th><NameFilter /></th>
          <th><CreationDateFilter /></th>
        </tr>
      </thead>
      <tbody><CategoryRow /></tbody>
    </table>
  )
}

function CategorySearchBar() {
  return (
    <form id="category-search-bar">
      <input type="text" placeholder="Search..." />
    </form>
  );
}

function RecordButton() {
  return (
    <a href="#">
      <button id="record-button" style={{ backgroundColor: "red"}}>
        <label>
          Record
        </label>
      </button>
    </a>
  )
}

function ItemRow() {
  return (
    <li>
      <div className="item-row">
        [Item Name] 
        <DeleteIcon />
      </div>
    </li>
  )
}

function ItemList() {
  return (
    <div className="item-list">
      <ul>
        <ItemRow />
      </ul>
    </div>
  )
}

function ItemListMenu() {
  return (
    <div id="item-list" style={{ backgroundColor: "pink"}}>
      [Name of Selected Category]
      <ItemList />
    </div>
  )
} 

function CategoryList() {
  return (
    <div id="category-list" style={{ backgroundColor: "lightblue"}}>
      <h2 id="category-list-title">Categories</h2>
      <CategorySearchBar />
      <CategoryTable />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen place-content-center">
      <p>VoiceList</p>
      <div className="flex items-center">
        <CategoryList />
        <ItemListMenu />
      </div>
      <RecordButton />
    </div>
  );
}