import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GetData } from "../services/APIengine";
import { Link } from "react-router-dom";
import { create } from "jss";
import rtl from "jss-rtl";
import Searchbar from "../componenets/common-components/Searchbar";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Hero2 from "../assets/images/hero2.png";
import {
  withStyles,
  createStyles,
  InputBase,
  Hidden,
  createTheme,
  StylesProvider,
  ThemeProvider,
  jssPreset,
} from "@material-ui/core";

const theme = createTheme({
  direction: "rtl",
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const StyledInput = withStyles(() =>
  createStyles({
    root: {},
    input: {
      borderRadius: 0,
      position: "relative",
      backgroundColor: "#fff",
      border: "1px solid #fff",
      fontSize: 12,
      padding: "12px 17px",
      "&:focus": {
        backgroundColor: "#fff",
        border: `1px solid #fff !important`,
      },
    },
  })
)(InputBase);

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: "70px",
    marginBottom: "1em",
    height: "auto",
  },
  item: {
    height: "auto",
    margin: "0px 10px",
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 3,
    display: "block",
  },
  post: {
    height: 315,
    background: "#00303F",
    color: "#fff",
    borderRadius: 3,
    textAlign: "right",
    cursor: "pointer",
    transition: "0.25s",
    "&:hover": {
      opacity: "0.9",
    },
  },
  news: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",

    "& .description": {
      display: "flex",
      flexDirection: "column",
      padding: "20px 15px",
      margin: "10px 0px",
      textAlign: "right",
      boxShadow: "0 10px 20px 0 rgb(221 221 221 / 30%)",
      "& .title": {
        fontSize: "17px",
        fontWeight: "600",
        margin: "5px 0px",
        cursor: "pointer",
        "&:hover": {
          color: "#09cc7f",
        },
      },
      "& .text": {
        fontSize: "14px",
        margin: "5px 0px",
      },
    },
  },
  headertext: {
    color: "#072366",
    fontWeight: "bold",
    wordSpacing: "-1.2px",
    paddingBlock: "80px !important",
    "@media (max-width: 600px)": {
      fontSize: "2em !important",
    },
  },
  header: {
    backgroundImage: `url(${Hero2})`,
    height: 250,
  },
}));

const NewsComponent = ({ imgSrc, id, item }) => {
  const classes = useStyles();

  return (
    <Link to={`/News/${id}`}>
      <div className={classes.news}>
        <div>
          <img src={imgSrc} alt="news" width={"100%"} height={"auto"} />
        </div>
        <Grid>
          <div
            style={{
              paddingRight: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              color: "black",
            }}
            className="text"
          >
            {item.createDate}
            <CalendarTodayIcon
              style={{ color: "#000", marginLeft: "5px" }}
              fontSize="small"
            />
          </div>
        </Grid>
        <div className="description">
          <Typography className="title">{item.title}</Typography>
        </div>
      </div>
    </Link>
  );
};

export default function NewsPage() {
  const classes = useStyles();

  const [data, setData] = useState(null);
  useEffect(() => {
    GetData(`Tehran/PostGroup`).then((res) => setData(res));
  }, []);

  return (
    <>
      <h1 className='appr-topic'>اخبار و اطلاعیه ها</h1>
      {data ? (
        <div>
          {data ? (
            <Grid
              container
              justifyContent="space-between"
              direction="row-reverse"
              cl
              assName={classes.root}
            >
              <Searchbar />
              <Grid item xs={12} md={7} className={classes.item}>
                {data?.posts.slice(0, 10).map((item) => (
                  <Grid>
                    <NewsComponent
                      imgSrc={
                        "http://charity.mykanoon.ir/File/Get/" +
                        item.imageIds[0]
                      }
                      item={item}
                      description={"text"}
                      id={item.id}
                      key={item.id}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : null}
        </div>
      ) : (
        <CircularProgress style={{ marginTop: "10vh" }} />
      )}
    </>
  );
}
