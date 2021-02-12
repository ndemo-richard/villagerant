import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import SocialFollow from './SocialFollow';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome} from '@fortawesome/free-solid-svg-icons';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";




const StyledAnchor = styled.a`
    padding : 1rem 2rem;
    display: flex;
    align-items:center;
    position:relative;
    text-transform:uppercase;
    font-weight:900;
    font-size:1em;
    background:none;
    border:0;
    cursor:pointer;
    color:#FFAFA;
    box-shadow: 1px 2px 1px black;
    border-radius:15px;

    &:hover{
        transform: translateY(-2px);
    }
    `;

const StyledSocial = styled.h1`
    padding : 0rem 3rem;
    display: flex;
    font-size:1rem;
    align-items:center;
    position:relative;
    text-transform:uppercase;
    background:none;
    border:0;
    outline:none;
    `;

class HamburgerMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            menuOpen:false
        }
    }
    handleStateChange(state){
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu(){
        this.setState({menuOpen:false})
    }
   
    render(){
        
        return(
            
            <Menu  right noOverlay width={ 280}
            isOpen={this.state.MenuOPen}
            onStateChange={(state) => this.handleStateChange(state)}>
            <Link href={"/"} passHref>
                <StyledAnchor onClick={()=>this.closeMenu()}><FontAwesomeIcon icon={faHome} size="3x"/>&nbsp;&nbsp;home</StyledAnchor>
            </Link>
            <Link href={"https://youtube.com/villagerant"} passHref>
                <StyledAnchor onClick={()=>this.closeMenu()}><FontAwesomeIcon icon={faYoutube} color=" #fc1300" size="2x"/>&nbsp;&nbsp;youtube</StyledAnchor>
            </Link>
            <Link href={"https://facebook.com/villagerant"} passHref>
                <StyledAnchor onClick={()=>this.closeMenu()}><FontAwesomeIcon icon={faFacebook} color="#0589f7" size="2x"/>&nbsp;&nbsp;facebook</StyledAnchor>
            </Link>
            <Link href={"https://twitter.com/villagerant"} passHref>
                <StyledAnchor onClick={()=>this.closeMenu()}><FontAwesomeIcon icon={faTwitter} color="#49a1eb" size="2x"/>&nbsp;&nbsp;twitter</StyledAnchor>
            </Link>
            <Link href={"https://instagram.com/villagerant"} passHref>
                <StyledAnchor onClick={()=>this.closeMenu()}><FontAwesomeIcon icon={faInstagram} color=" #e80025" size="2x"/>&nbsp;&nbsp;instagram</StyledAnchor>
            </Link>
            </Menu>
           
        )
    }
}

export default HamburgerMenu;
