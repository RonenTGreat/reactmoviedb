import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Styles
import { Wrapper, Content } from "./BreadCumb.styles";

const BreadCumb = ({movieTitle}) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCumb.propTypes = {
  movieTitle: PropTypes.string,
  
}

export default BreadCumb;
