import { createGlobalStyle } from "styled-components"
export const HomeMenuStyles = createGlobalStyle`
  
  ::-webkit-scrollbar {
       display: none;
      scrollbar-width: none;
      -ms-overflow-style: none;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: lightgrey;
      border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: grey;
  }

  
/* Individual item */
.bm-item {
  display: inline-block;
  text-decoration: none;
  margin-bottom: 10px;
  color: #d1d1d1;
  transition: color 0.2s;
  outline: none !important;
}
.bm-item:hover {
  color: white;
}
.bm-burger-button {
    display: none;
    width: 24px;
    height: 24px;
    left: 20px;
    top: 28px;  
    position: fixed;
    @media screen and (max-width: 991px) {
      display: block;     
    }
    @media screen and (max-width: 767px) {
      display: block;      
    }
    @media screen and (max-width: 345px) {
      display: block;    
    }
}
.bm-burger-button span{ 
  display: block;
  width: 24px;
  height: 24px;
  overflow: hidden;
}
.bm-burger-button span span{
display:block;
width:100%;
height:14% !important;
background-color:rgb(87, 51, 147);
border-radius: 3px;
transition: all 0.3s;
}
/* Color/shape of burger icon bars */
/* .bm-burger-bars:nth-child(1) {
    width:24px;
    margin-left: 12px;
}
.bm-burger-bars:nth-child(2) {
    width:36px;
    margin-left: 0px;
}
.bm-burger-bars:nth-child(3) {
    width:16px;
    margin-left: 20px;
} */

/* Position and sizing of clickable cross button */
.bm-cross-button {
  display: none;
  height: 0;
  width: 0;
} 

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/* General sidebar styles */
.bm-menu {
  background: #ffffff;
  // padding: 2.5em 1.5em 0;
  outline: none !important;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  outline: none !important;
}

.bm-item-list::focus {
  color: #b8b7ad;
  outline: none !important;
}


.menu-item {
  background: #ffffff;
  padding: 1.5em 1.5em 0;
  font-size: 1rem;   
}
.bm-menu-wrap{
  position:absolute !important;
  height:auto !important;
  width:100% !important;
  top:70px;    
  z-index:9999;
  transition:all 1s
}
.bm-menu {
    background-color:#08275c !important;
  // padding: 2.5em 1.5em 0;
  outline: none !important;
}
`