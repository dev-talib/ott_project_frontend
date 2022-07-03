import React from 'react'
import './Sidebar.css'

function Sidebar() {

  return (
    <div className='sidebar'>
<nav class="sideBar">
  <div class="profile">
    <i class="fa-solid fa-user"></i>
  </div>
  <p class="text-muted">Analytics</p>
  <ul class="navLinks">
    <li>
      <a href="#" class="link">
        <i class="fa-solid fa-table-columns link-icon"></i>
        <span class="link-text">DashBoard</span>
      </a>
    </li>
    <li>
      <a href="#" class="link">
        <i class="fa-solid fa-chart-line link-icon"></i>
        <span class="link-text">Performance</span>
      </a>
    </li>
  </ul>
  <p class="text-muted">Content</p>
  <ul class="navLinks">
    <li>
      <a href="#" class="link">
        <i class="fa-solid fa-clipboard link-icon"></i>
        <span class="link-text">Guides</span>
      </a>
    </li>
    <li>
      <a href="#" class="link link-like">
        <i class="fa-solid fa-thumbs-up link-icon"></i>
        <span class="link-text">Likes</span>
      </a>
    </li>
  </ul>
  <ul class="navLinks">
    <li>
      <a href="#" class="link" data-theme>
        <i class="fa-solid fa-toggle-off link-icon"></i>
        <span class="link-text">Themes</span>
      </a>
    </li>
    <li>
      <a href="#" class="link">
        <i class="fa-solid fa-gear link-icon"></i>
        <span class="link-text">Setting</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Sidebar