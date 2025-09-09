"use client";

import React, { Component } from "react";
import image from "../images/delete.png";
import sortDownArrow from "../images/sort-down.png";
import sortUpArrow from "../images/sort-up.png";

const SORTDOWNARROW = sortDownArrow.src;
const SORTUPARROW = sortUpArrow.src;
const DELETEICON = image.src;

function DeleteIcon() {
  function handleClick() {
    alert("Delete icon clicked");
  }
  return (
    <div>
      <button className="delete-icon" onClick={handleClick}>
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
    <div className="flex flex-row">
      <h3>Date</h3>
      <SortDownArrow />
    </div>
  )
}

function NameFilter() {
  return (
    <div className="flex flex-row">
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
    <div className="m-12">
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="p-5 px-7 rounded-4xl bg-red-500"></a>
    </div>
  )
}

function ItemRow() {
  return (
    <li>
      <div className="flex flex-row">
        <p className="basis-6/7 pl-5">- [Item Name]</p>
        <DeleteIcon />
      </div>
    </li>
  )
}

function ItemList() {
  return (
    <div className="item-list">
      <ul className="flex-col space-y-2">
        <ItemRow />
        <ItemRow />
        <ItemRow />
      </ul>
    </div>
  )
}

function ItemListMenu() {
  return (
    <div className="col-start-4 col-span-4 p-5">
      <p className="text-2xl text-center">[Name of Selected Category]</p>
      <ItemList />
    </div>
  )
} 

function CategoryList() {
  return (
    <div className="col-start-2 col-span-2">
      <div className="flex flex-row">
        <h2>Categories</h2>
        <CategorySearchBar />
      </div>
      <CategoryTable />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header></header>
        <main>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <p className="text-5xl text-center mt-30">VoiceList</p>
            <div className="grid grid-cols-8 gap-5">
              <CategoryList />
              <ItemListMenu />
            </div>
            <div className="grid justify-items-center"><RecordButton /></div>
            
          </div>
        </main>
      <footer></footer>
    </>
  );
}