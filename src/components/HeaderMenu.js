import React, { useState } from "react";
import { Menu, Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom";

import "../App.css";

const HeaderMenu = (props) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);
  console.log(props.location && props.location)
  return (
    <Grid columns={3}>
      <Grid.Row style={{marginTop: 20}}>
        <Grid.Column>
          <Menu pointing secondary size="massive">
            <Menu.Item style={{ marginLeft: 20, marginBottom: 50}} className="logo">Alain Green Photography</Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column>
          <Menu
            style={{
              display: "flex",
              justifyContent: "center"
            }}
            pointing
            secondary
            size="large"
            
          >
            <Menu.Item
              as={Link}
              to="/"
              name="home"
              active={props.location && activeItem === "home" || props.location.key === "7wbn63"}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/head_shots"
              name="head_shots"
              active={props.match && activeItem === "head_shots" || props.match.url === "/head_shots"}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={Link}
              to="/photos"
              name="portfolio"
              active={props.match && activeItem === "portfolio" || props.match.url === "/photos"}
              onClick={handleItemClick}
            />
            {/* <Menu.Item
              as={Link}
              to="/products"
              name="products"
              active={activeItem === "products"}
              onClick={handleItemClick}
            /> */}
          </Menu>
        </Grid.Column>
        <Grid.Column>
          <Menu pointing secondary size="large">
            <Menu.Item
              as={Link}
              to="/contact"
              position="right"
              name="contact"
              active={props.match && activeItem === "contact" || props.match.url === "/contact"}
              onClick={handleItemClick}
              style={{marginRight: 20}}
            />
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default withRouter(HeaderMenu);
