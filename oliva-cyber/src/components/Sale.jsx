/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Cta1 from "../assets/images/cta-1.jpg";
import Cta2 from "../assets/images/cta-2.jpg";

export default function Sale() {
  return (
    <section class="section cta">
      <div class="container">
        <ul class="cta-list">
          <li>
            <div class="cta-card" style={{ backgroundImage: `url(${Cta1})` }}>
              <p class="card-subtitle">Adidas Shoes</p>

              <h3 class="h2 card-title">The Summer Sale Off 50%</h3>

              <a href="#" class="btn btn-link">
                <span>Shop Now</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div class="cta-card" style={{ backgroundImage: `url(${Cta2})` }}>
              <p class="card-subtitle">Nike Shoes</p>

              <h3 class="h2 card-title">Makes Yourself Keep Sporty</h3>

              <a href="#" class="btn btn-link">
                <span>Shop Now</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
