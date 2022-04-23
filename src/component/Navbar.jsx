import React from 'react'

export default function Navbar() {
 
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm ">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#">LA COLLECTION
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/products">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <div class="buttons">
              <a href="/login" class="btn btn-outline-dark">
                <i class="fa fa-sign-in me-1"></i>Login</a>
              <a href="/register" class="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus me-1"></i>Register</a>
              <a href="/cart" class="btn btn-outline-dark ms-2">
                <i class="fa fa-shopping-cart me-1"></i>Cart (0)</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
