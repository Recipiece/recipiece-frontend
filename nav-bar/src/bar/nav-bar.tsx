import { useCallback, useState, VFC } from "react";
import Drawer from "react-modern-drawer";
import "./nav-bar.scss";
import "react-modern-drawer/dist/index.css";

export const NavBar: VFC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="nav-bar">
        <span className="material-icons" onClick={toggleDrawer}>
          menu
        </span>
        <h2 className="title">Recipiece</h2>
      </nav>
      <Drawer
        duration={200}
        zIndex={1000}
        direction="left"
        onClose={toggleDrawer}
        open={drawerOpen}
      >
        <h3>Option 1</h3>
      </Drawer>
    </>
  );
};
