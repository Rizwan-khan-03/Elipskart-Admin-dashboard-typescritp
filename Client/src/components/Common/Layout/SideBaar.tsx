import React from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import { routepath } from '../../../Router/RouteList';
import Header from './Header';
import ProtectRoutes from '../../../Router/ProtectRoutes';
import NoteFound from './NoteFound';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import "./Sidebar.css"
function SideBaar() {
  const { collapseSidebar } = useProSidebar();
  return (

    <div className='anvDashOuter'>
      <div className="sidebar">
        <Sidebar transitionDuration={1000}
        className="anvSidebar_lg"
          >
          <Menu>

            <li>
            <NavLink to="dashboard">dashboard</NavLink>
            </li>
            <li>
            <NavLink to="company">company</NavLink>
            </li>
            <li>
            <NavLink to="materialCategory">materialCategory</NavLink>
            </li>
            <li>
            <NavLink to="users">users</NavLink>
            </li>
              {/* <MenuItem ><NavLink to="dashboard">dashboard</NavLink></MenuItem>
              <MenuItem ><NavLink to="company">company</NavLink></MenuItem>
              <MenuItem ><NavLink to="materialCategory">materialCategory</NavLink></MenuItem>
              <MenuItem ><NavLink to="users">users</NavLink></MenuItem> */}

            </Menu>
          
        </Sidebar>
      </div>
      <main style={{ padding: 0, width: '100%' }}>
        <div>
          <Header calback={() => collapseSidebar()} />
          <Routes>
            {routepath.map((i, index) => {
              console.log("i.private", i.path);

              if (i.private) {
                return (
                  <Route
                    key={`routes_${index}`}
                    path={i.path}

                    element={<ProtectRoutes Component={i.Element} />}
                  />
                );
              } else {
                return (
                  <Route key={`routes_${index}`} path="*" element={<NoteFound />} />
                );
              }
            })}
          </Routes>
        </div>
      </main>

    </div>
  )
}

export default SideBaar