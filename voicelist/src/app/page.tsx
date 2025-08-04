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
    <a href="#">
      <button className="bg-red-500 m-12 p-6">
        <label>
        </label>
      </button>
    </a>
  )
}

function ItemRow() {
  return (
    <li>
      <div className="flex flex-row">
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
        <ItemRow />
        <ItemRow />
      </ul>
    </div>
  )
}

function ItemListMenu() {
  return (
    <div className="bg-sky-500">
      [Name of Selected Category]
      <ItemList />
    </div>
  )
} 

function CategoryList() {
  return (
    <div className="bg-orange-500">
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
          <div className="grid grid-rows-[auto_1fr_auto] bg-emerald-500 min-h-screen">
            <p className="bg-blue-500 text-3xl ">VoiceList</p>
            <div className="grid grid-cols-2 bg-yellow-500">
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