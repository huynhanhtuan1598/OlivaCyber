/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Collection1 from "../assets/images/collection-1.jpg";
import Collection2 from "../assets/images/collection-2.jpg";
import Collection3 from "../assets/images/collection-3.jpg";

export default function Collection() {
  return (
    <section class="section collection">
      <div class="container">
        <ul class="collection-list has-scrollbar">
          <li>
            <div
              class="collection-card"
              style={{ backgroundImage: `url(${Collection1})` }}
            >
              <h3 class="h4 card-title">Men Collections</h3>

              <a href="#" class="btn btn-secondary">
                <span>Explore All</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div
              class="collection-card"
              style={{ backgroundImage: `url(${Collection2})` }}
            >
              <h3 class="h4 card-title">Women Collections</h3>

              <a href="#" class="btn btn-secondary">
                <span>Explore All</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </li>

          <li>
            <div
              class="collection-card"
              style={{ backgroundImage: `url(${Collection3})` }}
            >
              <h3 class="h4 card-title">Sports Collections</h3>

              <a href="#" class="btn btn-secondary">
                <span>Explore All</span>

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
