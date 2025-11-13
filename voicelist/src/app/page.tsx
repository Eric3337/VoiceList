"use client";

import { useState } from "react";
import image from "../images/delete.png";
import sortDownArrow from "../images/sort-down.png";
import sortUpArrow from "../images/sort-up.png";

const SORTDOWNARROW = sortDownArrow.src;
const SORTUPARROW = sortUpArrow.src;
const DELETEICON = image.src;



function DeleteIcon({ onSubCatRow }: { onSubCatRow: () => void }) {
  return (
    <div>
      <button className="bg-sky-500 hover:bg-sky-600 cursor-pointer rounded-md shadow-md shadow-sky-300" onClick={onSubCatRow}>
        <img src={DELETEICON} alt="Delete"/>
      </button>
    </div>
  );
}

function ItemDeleteIcon({ onSubRow }: { onSubRow: () => void }) {
  function handleClick() {
    let tableBody = document.getElementsByClassName("category-table-body")[0];
    console.log(tableBody);
  }
  return (
    <div>
      <button className="hover:bg-sky-200 cursor-pointer rounded-md shadow-md shadow-sky-300" onClick={handleClick}>
        <img src={DELETEICON} alt="Delete" onClick={onSubRow}/>
      </button>
    </div>
  );
}

function CategoryRow({ id, subCatRow }: {id: number, subCatRow: () => void}) {
  return (
    <tr>
      <td>[Category Name {id}]</td>
      <td>{new Date().toLocaleDateString()}</td>
      <td><DeleteIcon onSubCatRow={subCatRow}/></td>
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
    <div className="flex flex-row px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">
      <h3>Date</h3>
      <SortDownArrow />
    </div>
  )
}

function NameFilter() {
  return (
    <div className="flex flex-row px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">
      <h3>Name</h3>
      <SortDownArrow />
    </div>
  )
}

function CategoryTable({ catRows, subCatRow }: { catRows: number[], subCatRow: () => void }) {
  return (
    <div className="overflow-y-auto h-[60vh]">
      <table>
        <thead>
          <tr>
            <th><NameFilter /></th>
            <th><CreationDateFilter /></th>
          </tr>
        </thead>
        <tbody>
          {catRows.length === 0 ? (
            <tr><td>No categories found</td></tr>
          ) : (
            catRows.map((rowId, index) => (
              <CategoryRow key={rowId} id={index} subCatRow={subCatRow} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

function CategorySearchBar() {
  return (
    <form id="category-search-bar">
      <input type="text" placeholder="Search..." className="w-full"/>
    </form>
  );
}

function AddRowButton({ onAddRow }: { onAddRow: () => void }) {
  return (
    <div className="m-12">
      <a onClick={onAddRow} className="p-5 px-7 rounded-4xl bg-red-500"></a>
    </div>
  )
}

function RecordButton({ onAddRow }: { onAddRow: () => void }) {
  return (
    <div className="m-12">
      <a onClick={onAddRow} className="bg-red-500 hover:bg-red-600 cursor-pointer rounded-md shadow-md shadow-sky-300 p-5 px-7 rounded-4xl">Add item</a>
    </div>
  )
}

function ItemRow({ id, subRow }: { id: number, subRow: () => void }) {
  return (
    <li>
      <div className="flex flex-row">
        <p className="basis-6/7 pl-5">- [Item Name {id}]</p>
        <ItemDeleteIcon onSubRow={subRow}/>
      </div>
    </li>
  )
}

function ItemList({ itemRows, subRow }: { itemRows: number[], subRow: () => void }) {
  return (
    <div className="item-list">
      <ul id="item-list" className="flex-col space-y-2">
        {itemRows.map((rowId, index) => (
          <ItemRow key={rowId} id={index + 1} subRow={subRow}/>
        ))}
      </ul>
    </div>
  )
}

function ItemListMenu({ itemRows, subRow }: { itemRows: number[], subRow: () => void }) {
  return (
    <div className="col-start-4 col-span-4 p-5">
      <p className="text-2xl text-center">[Name of Selected Category]</p>
      <ItemList itemRows={itemRows} subRow={subRow} />
    </div>
  )
} 

// p-5 px-7 rounded-4xl bg-red-500
function AddCatButton({ onAddCatRow }: { onAddCatRow: () => void }) {
  return (
    <div className="m-1">
      <button onClick={onAddCatRow} className="bg-gray-100 hover:bg-gray-200 font-bold py-2 px-4 rounded">
        +</button>
    </div>
  )
}


function CategoryList({ catRows, addCatRow, subCatRow }: { catRows: number[], addCatRow: () => void, subCatRow: () => void}) {
  return (
    <div className="col-start-2 col-span-2 pt-5">
      <div className="flex flex-row gap-[1vw]">
        <h2 className="text-xl basis-1/3">Categories</h2>
        <div className="basis-2/3"><CategorySearchBar /></div>
      </div>
      <CategoryTable catRows={catRows} subCatRow={subCatRow}/>
    </div>
  );
}

export default function Home() {
  const [ itemRows, setItemRows ] = useState([0]);
  const addRow = () => {
    setItemRows(prev => [...prev, prev.length]);
  };
  
  const subRow = () => {
    setItemRows(prev => prev.length > 0 ? prev.slice(0, -1) : prev);
  };

  const [ catRows, setCatRows ] = useState([0]);
  const addCatRow = () => {
    setCatRows(prev => [...prev, prev.length]);
  };

  const subCatRow = () => {
    setCatRows(prev => prev.length > 0 ? prev.slice(0, -1) : prev);
  };

  const LAVENDER_BLUSH = "#f3e8ee"; 

  // https://coolors.co/0d5c63-63b0cd-99ffa3-f3e8ee-9d695a
  // colour palette for website

  return (
    <>
      <header></header>
        <main>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <p className="text-5xl text-center pt-10 pb-5 bg-gray-200">VoiceList</p>
            <div className="grid grid-cols-8 gap-5">
              <CategoryList catRows={catRows} addCatRow={addCatRow} subCatRow={subCatRow} />
              <ItemListMenu itemRows={itemRows} subRow={subRow}/>
            </div>
            <div className="flex items-center justify-center gap-4 bg-moonstone">
              <AddCatButton onAddCatRow={addCatRow}/>
              <div className="grid justify-items-center">
                <RecordButton onAddRow={addRow}/>
              </div>
            </div>
          </div>
        </main>
      <footer></footer>
    </>
  );
}