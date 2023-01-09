import React from "react";
import NotesIcon from '@mui/icons-material/Notes';

function Header() {
  return (
    <header>
      <h1>
        <NotesIcon />
         {' '}Note-Keeper
      </h1>
    </header>
  );
}

export default Header;
