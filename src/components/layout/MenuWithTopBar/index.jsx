import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Menu from '../Menu';
import styles from './styles.module.css';
import menuOptions from 'assets/jsx/MenuOptions';
import { useLocation } from 'react-router';

function MenuWithTopBar({
  children,
}) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [activated, setIsActivated] = useState(location.pathname === '/clinic' ? 0 : 1);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleActivated = (id) => {
    setIsActivated(id);
  };

  return (
    <div className={styles.container}>
      <Header handleDrawer={handleDrawer} open={open} />
      <div className={styles.row}>
        <Menu
          handleDrawer={handleDrawer}
          open={open}
          options={menuOptions}
          activated={activated}
          handleActivated={handleActivated}
        />
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  );
}

MenuWithTopBar.propTypes = {
  children: PropTypes.node,
};

MenuWithTopBar.defaultProps = {
  children: null,
};

export default MenuWithTopBar;
