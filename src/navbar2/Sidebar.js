import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarComponents'

export default function Sidebar(props) {
  return (
      <SidebarContainer isOpened={props.isOpened} onClick={props.helper}>
          <Icon>
              <CloseIcon />
          </Icon>

          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="">etusivu</SidebarLink>
                  <SidebarLink to="stories">meidän tarinat</SidebarLink>
                  <SidebarLink to="facts">tietoa</SidebarLink>
                  <SidebarLink to="comments">kommentoi</SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
}
