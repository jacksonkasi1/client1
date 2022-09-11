import React, { useState } from "react"
// import { Carousel } from "react-bootstrap";
import Carousel from "react-elastic-carousel"
import Item from "./Item"
// import Card from "./Card"
// import dataSlider from './dataSlider';
// import Dots from "./Dots";

// ** import mui for model
import { IconButton } from "@mui/material"
import { Modal } from "@mui/material"
import DialogContent from "@mui/material/DialogContent"

// ** import icons
import { X } from "react-feather"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
]

export default function Slider() {
  // ** state for model
  const [modal, setModal] = useState(false)
  const [modelNum, setModelNum] = useState(0)

  const modelData = [
    {
      title: "Model 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Model 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. um dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
      image:
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Model 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
      image:
        "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  const CustomModel = () => (
    <Modal open={modal} maxWidth={"xl"}>
      <div className="model-container">
        {/* close icon button */}
        <IconButton
          onClick={() => setModal(!modal)}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: "9999",
            color: "#000",
            background: "#f0f0f0",
            padding: "0.5rem",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
          }}
          className="model-close"
        >
          <X size={24} />
        </IconButton>

        {/* image */}
        <div className="model-body">
          <img
            src={modelData[modelNum].image}
            alt="img"
            className="model-img"
          />

          <p style={{ fontSize: "20px"  }}>{modelData[modelNum].description}</p>
        </div>
      </div>
    </Modal>
  )

  return (
    <>
      {CustomModel()}
      <div className="slider">
        <Carousel breakpoints={breakPoints}>
          <Item>
            <div
              style={{
                backgroundImage: "url(/card_img1.jpg)",
                width: "100%",
                height: "100%",
                borderRadius: "50px",
                cursor: "pointer"
              }}
              onClick={() => {
                setModelNum(0)
                setModal(!modal)
              }}
            >
              <div class="card-category mt-5">Mabol1970</div>
              <div class="card-title mt-2">Sarti del Metallo</div>
              <div class="card-body ps-5 pe-5 pt-3">
                Procursori della lavorazione del metallo secondi i canoni del
                design contemporaneo. Mabol1970 realizza opere d'architettura in
                tutto il mondo.
              </div>
            </div>
          </Item>
          <Item>
            <div
              style={{
                backgroundImage: "url(/card_img1.jpg)",
                width: "100%",
                height: "100%",
                borderRadius: "50px",
                cursor: "pointer"
              }}
              onClick={() => {
                setModelNum(1)
                setModal(!modal)
              }}
            >
              <div class="card-category mt-5">Arteba</div>
              <div class="card-title mt-2">L'alfabeto del metallo</div>
              <div class="card-body ps-5 pe-5 pt-3">
                Un nuovo alfabeto progettuale nel mondo dell'arredobagno per una
                lettura contemporanea di come viviamo e pensiamo lo spazio
                dedicato a noi stessi.
              </div>
            </div>
          </Item>
          <Item>
            <div
              style={{
                backgroundImage: "url(/card_img1.jpg)",
                width: "100%",
                height: "100%",
                borderRadius: "50px",
                cursor: "pointer"
              }}
              onClick={() => {
                setModelNum(2)
                setModal(!modal)
              }}
            >
              <div class="card-category mt-5">Gentilin Design</div>
              <div class="card-title mt-2">Design Takeaway</div>
              <div class="card-body ps-5 pe-5 pt-3">
                Design e grande distribuzione si incontrano in una collezione di
                prodotti che mixano irriverenza, rigore formale e tecniche
                produttive.
              </div>
            </div>
          </Item>
        </Carousel>
      </div>
    </>
  )
}
