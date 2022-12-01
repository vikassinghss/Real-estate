import React from "react";

import Carousel from "react-bootstrap/Carousel";

const C = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mb-3">Our Clients Say!</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/1329317991/photo/asian-chinese-successful-businesswoman-meeting-discussion-with-her-colleague-client-on.jpg?b=1&s=170667a&w=0&k=20&c=0nbiOM-PlPmC5OLNfdzUtfJE3Vy49Ddk79dP5LscbVg="
              style={{ width: "45px", height: "405px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3> Alia </h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/4690914.jpg"
              style={{ width: "45px", height: "405px" }}
              alt="Second slide" 
            />

            <Carousel.Caption>
              <h3>Devid</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://c0.wallpaperflare.com/preview/888/572/23/businessmen-businesspeople-businesswomen-client.jpg"
              style={{ width: "45px", height: "405px" }}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Laksh</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default C;
