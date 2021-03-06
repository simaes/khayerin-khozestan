import { React, useState } from "react";
import "./header.css";
import Logo from "../../assets/images/khayerin-logo.png";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
    Button: {
      display: "flex",
      position: "relative",
      height: "100%",
      width: "auto",
      "& > *": {
        color: "#072366",
        fontSize: "1.1rem",
      },
    },
    buttonOnHover: {
      "&:hover": {
        color: "#20C679 !important",
      },
    },
    button__overlay: {
      position: "absolute",
      backgroundColor: "#000",
      opacity: 0,
      height: "100%",
      width: "100%",
      transition: "opacity 0.5s",
    },
    list: {
      width: 200,
    },
    list__item: {
      textAlign: "right",
      color: "#000 !important",
      "&>span": {
        fontSize: "1.2rem !important",
      },
    },
  });

export default function NavBar(){
    const classes = useStyles();

    const StyledMenu = withStyles({
        paper: {
          borderTop: "5px solid #20C679",
          borderRadius: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          margin: 0,
          padding: 0,
        },
      })((props) => (
        <Menu
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          {...props}
        />
      ));
  
      const [anchorEl, setAnchorEl] = useState(null);
      const [anchorEl1, setAnchorEl1] = useState(null);
  
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
  
      const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
      };
  
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleClose1 = () => {
        setAnchorEl1(null);
      };
      const StyledMenuItem = withStyles(() => ({}))(MenuItem);

    return(
        <>
        <div className="header">
          <div className="content">
              <button className="btn1">
                <span>?????????? ???? ??????????</span>
              </button>
            <Link to={`/News`} className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
              >
                <div className={classes.button__overlay} />
                ?????????? ?? ?????????????? ????
              </Button>
            </Link>
            <Link to={`/Philanthropists`} className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
              >
                <div className={classes.button__overlay} />
                ??????????
              </Button>
            </Link>
            <div className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
              >
                <div
                  className={classes.button__overlay}
                  onClick={handleClick1}
                  aria-controls="customized-menu1"
                  aria-haspopup="true"
                />
                ???????????? ??????????
              </Button>
            </div>
            <StyledMenu
              id="customized-menu1"
              anchorEl={anchorEl1}
              open={Boolean(anchorEl1)}
              onClose={handleClose1}
              style={{direction: 'rtl'}}
            >
              <StyledMenuItem>
                <Link to="/About">
                <ListItemText
                  primary="?????????????? ??????????"
                  style={{ textAlign: "right", color: "#fff" }}
                />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <Link to="/Appreciations" >
                <ListItemText
                  primary="?????????????????? ????"
                  style={{ textAlign: "right", color: "#fff" }}
                />
                </Link>
              </StyledMenuItem>
            </StyledMenu>
            <div className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <div className={classes.button__overlay} />
                ?????????? ????
              </Button>
            </div>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to='/Projects/half-built'>
                <StyledMenuItem>
                  <ListItemText
                      primary="?????????? ?????? ???????? ????????"
                      style={{ textAlign: "right", color: "#fff" }}
                  />
                </StyledMenuItem>
              </Link>
              <Link to='/Projects/overhauled'>
                <StyledMenuItem>
                  <ListItemText
                      primary="?????????? ?????? ?????????????? ????????????"
                      style={{ textAlign: "right", color: "#fff" }}
                  />
                </StyledMenuItem>
              </Link>
              <Link to='/Projects/completed'>
                <StyledMenuItem>
                  <ListItemText
                      primary="?????????? ?????? ?????????? ??????"
                      style={{ textAlign: "right", color: "#fff" }}
                  />
                </StyledMenuItem>
              </Link>
              <Link to='/Projects/under-construction'>
                <StyledMenuItem>
                  <ListItemText
                      primary="?????????? ?????? ?????????? ??????????"
                      style={{ textAlign: "right", color: "#fff" }}
                  />
                </StyledMenuItem>
              </Link>
            </StyledMenu>
            <Link to={`/`} className={`link ${classes.Button}`}>
              <Button
                style={{ padding: "0 2vw" }}
                className={classes.buttonOnHover}
              >
                <div className={classes.button__overlay} />
                ????????
              </Button>
            </Link>
            <Link to={`/`} >
            <img className="media" src={Logo} alt="khayerin logo" />
            </Link>
          </div>
        </div>
      </>
    )
}