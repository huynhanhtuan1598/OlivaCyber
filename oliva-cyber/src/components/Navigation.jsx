import React from "react";
import Hero from "../assets/images/hero-banner.png";

export default function Navigation() {
  return (
    <section class="section hero" style={{ backgroundImage: `url(${Hero})` }}>
      <div class="container">
        <h2 class="h1 hero-title">
          New Summer <strong>Shoes Collection</strong>
        </h2>

        <p class="hero-text">
          Competently expedite alternative benefits whereas leading-edge
          catalysts for change. Globally leverage existing an expanded array of
          leadership.
        </p>

        <button class="btn btn-primary">
          <span>Shop Now</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </section>
  );
}
