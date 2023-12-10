import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Link from 'next/link';

const NavbarEditDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <span
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        className="text-2xl font-semibold tracking-tight cursor-pointer border-2 border-red px-3 py-2 rounded-md"
        onClick={handleClick}
      >
        Upraviť
      </span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} href="/edit/tags">
          Tagy
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/edit/speakers">
          Rečníci
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} href="/edit/events">
          Udalosti
        </MenuItem>
      </Menu>
    </div>
  );
};

export default NavbarEditDropdown;
