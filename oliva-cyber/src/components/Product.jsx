/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Product1 from "../assets/images/product-1.jpg";
import Product2 from "../assets/images/product-2.jpg";
import Product3 from "../assets/images/product-3.jpg";
import Product4 from "../assets/images/product-4.jpg";
import Product5 from "../assets/images/product-5.jpg";
import Product6 from "../assets/images/product-6.jpg";
import Product7 from "../assets/images/product-7.jpg";
import Product8 from "../assets/images/product-8.jpg";

export default function Product() {
  return (
    <section class="section product">
      <div class="container">
        <h2 class="h2 section-title">Bestsellers Products</h2>

        <ul class="filter-list">
          <li>
            <button class="filter-btn  active">All</button>
          </li>

          <li>
            <button class="filter-btn">Nike</button>
          </li>

          <li>
            <button class="filter-btn">Adidas</button>
          </li>

          <li>
            <button class="filter-btn">Puma</button>
          </li>

          <li>
            <button class="filter-btn">Bata</button>
          </li>

          <li>
            <button class="filter-btn">Apex</button>
          </li>
        </ul>

        <ul class="product-list">
          <li class="product-item">
            <div class="product-card" tabindex="0">
              <figure class="card-banner">
                <img
                  src={Product1}
                  width="312"
                  height="350"
                  loading="lazy"
                  alt="Running Sneaker Shoes"
                  class="image-contain"
                />

                <div class="card-badge">New</div>

                <ul class="card-action-list">
                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-1"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-1">
                      Add to Cart
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-2"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-2">
                      Add to Whishlist
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-3"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-3">
                      Quick View
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-4"
                    >
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-4">
                      Compare
                    </div>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <div class="card-cat">
                  <a href="#" class="card-cat-link">
                    Men
                  </a>{" "}
                  /
                  <a href="#" class="card-cat-link">
                    Women
                  </a>
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Running Sneaker Shoes</a>
                </h3>

                <data class="card-price" value="180.85">
                  $180.85
                </data>
              </div>
            </div>
          </li>

          <li class="product-item">
            <div class="product-card" tabindex="0">
              <figure class="card-banner">
                <img
                  src={Product2}
                  width="312"
                  height="350"
                  loading="lazy"
                  alt="Running Sneaker Shoes"
                  class="image-contain"
                />

                <ul class="card-action-list">
                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-1"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-1">
                      Add to Cart
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-2"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-2">
                      Add to Whishlist
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-3"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-3">
                      Quick View
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-4"
                    >
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-4">
                      Compare
                    </div>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <div class="card-cat">
                  <a href="#" class="card-cat-link">
                    Men
                  </a>{" "}
                  /
                  <a href="#" class="card-cat-link">
                    Sports
                  </a>
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Leather Mens Slipper</a>
                </h3>

                <data class="card-price" value="190.85">
                  $190.85
                </data>
              </div>
            </div>
          </li>

          <li class="product-item">
            <div class="product-card" tabindex="0">
              <figure class="card-banner">
                <img
                  src={Product3}
                  width="312"
                  height="350"
                  loading="lazy"
                  alt="Running Sneaker Shoes"
                  class="image-contain"
                />

                <div class="card-badge">New</div>

                <ul class="card-action-list">
                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-1"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-1">
                      Add to Cart
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-2"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-2">
                      Add to Whishlist
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-3"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-3">
                      Quick View
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-4"
                    >
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-4">
                      Compare
                    </div>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <div class="card-cat">
                  <a href="#" class="card-cat-link">
                    Men
                  </a>{" "}
                  /
                  <a href="#" class="card-cat-link">
                    Women
                  </a>
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Simple Fabric Shoe</a>
                </h3>

                <data class="card-price" value="160.85">
                  $160.85
                </data>
              </div>
            </div>
          </li>

          <li class="product-item">
            <div class="product-card" tabindex="0">
              <figure class="card-banner">
                <img
                  src={Product4}
                  width="312"
                  height="350"
                  loading="lazy"
                  alt="Running Sneaker Shoes"
                  class="image-contain"
                />

                <div class="card-badge"> -25%</div>

                <ul class="card-action-list">
                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-1"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-1">
                      Add to Cart
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-2"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-2">
                      Add to Whishlist
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-3"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-3">
                      Quick View
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-4"
                    >
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-4">
                      Compare
                    </div>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <div class="card-cat">
                  <a href="#" class="card-cat-link">
                    Men
                  </a>{" "}
                  /
                  <a href="#" class="card-cat-link">
                    Sports
                  </a>
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Air Jordan 7 Retro </a>
                </h3>

                <data class="card-price" value="170.85">
                  $170.85
                  <del>$200.21</del>
                </data>
              </div>
            </div>
          </li>

          <li class="product-item">
            <div class="product-card" tabindex="0">
              <figure class="card-banner">
                <img
                  src={Product5}
                  width="312"
                  height="350"
                  loading="lazy"
                  alt="Running Sneaker Shoes"
                  class="image-contain"
                />

                <div class="card-badge">New</div>

                <ul class="card-action-list">
                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-1"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-1">
                      Add to Cart
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-2"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-2">
                      Add to Whishlist
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-3"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-3">
                      Quick View
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-4"
                    >
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-4">
                      Compare
                    </div>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <div class="card-cat">
                  <a href="#" class="card-cat-link">
                    Men
                  </a>{" "}
                  /
                  <a href="#" class="card-cat-link">
                    Women
                  </a>
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Nike Air Max 270 SE</a>
                </h3>

                <data class="card-price" value="120.85">
                  $120.85
                </data>
              </div>
            </div>
          </li>

          <li class="product-item">
            <div class="product-card" tabindex="0">
              <figure class="card-banner">
                <img
                  src={Product6}
                  width="312"
                  height="350"
                  loading="lazy"
                  alt="Running Sneaker Shoes"
                  class="image-contain"
                />

                <ul class="card-action-list">
                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-1"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-1">
                      Add to Cart
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-2"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-2">
                      Add to Whishlist
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-3"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-3">
                      Quick View
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-4"
                    >
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-4">
                      Compare
                    </div>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <div class="card-cat">
                  <a href="#" class="card-cat-link">
                    Men
                  </a>{" "}
                  /
                  <a href="#" class="card-cat-link">
                    Women
                  </a>
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Adidas Sneakers Shoes</a>
                </h3>

                <data class="card-price" value="100.85">
                  $100.85
                </data>
              </div>
            </div>
          </li>

          <li class="product-item">
            <div class="product-card" tabindex="0">
              <figure class="card-banner">
                <img
                  src={Product7}
                  width="312"
                  height="350"
                  loading="lazy"
                  alt="Running Sneaker Shoes"
                  class="image-contain"
                />

                <ul class="card-action-list">
                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-1"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-1">
                      Add to Cart
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-2"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-2">
                      Add to Whishlist
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-3"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-3">
                      Quick View
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-4"
                    >
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-4">
                      Compare
                    </div>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <div class="card-cat">
                  <a href="#" class="card-cat-link">
                    Men
                  </a>{" "}
                  /
                  <a href="#" class="card-cat-link">
                    Sports
                  </a>
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Nike Basketball shoes</a>
                </h3>

                <data class="card-price" value="120.85">
                  $120.85
                </data>
              </div>
            </div>
          </li>

          <li class="product-item">
            <div class="product-card" tabindex="0">
              <figure class="card-banner">
                <img
                  src={Product8}
                  width="312"
                  height="350"
                  loading="lazy"
                  alt="Running Sneaker Shoes"
                  class="image-contain"
                />

                <ul class="card-action-list">
                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-1"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-1">
                      Add to Cart
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-2"
                    >
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-2">
                      Add to Whishlist
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-3"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-3">
                      Quick View
                    </div>
                  </li>

                  <li class="card-action-item">
                    <button
                      class="card-action-btn"
                      aria-labelledby="card-label-4"
                    >
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>

                    <div class="card-action-tooltip" id="card-label-4">
                      Compare
                    </div>
                  </li>
                </ul>
              </figure>

              <div class="card-content">
                <div class="card-cat">
                  <a href="#" class="card-cat-link">
                    Men
                  </a>{" "}
                  /
                  <a href="#" class="card-cat-link">
                    Women
                  </a>
                </div>

                <h3 class="h3 card-title">
                  <a href="#">Simple Fabric Shoe</a>
                </h3>

                <data class="card-price" value="100.85">
                  $100.85
                </data>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
