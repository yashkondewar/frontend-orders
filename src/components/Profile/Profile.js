import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import "./Profile.css";

// const useStyles = () => ({
//   profileContainer: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "16px",
//     borderBottom: "1px solid #ccc",
//     marginTop: "0px",
//     textAlign: "left",
//     marginLeft: "-40px",
//   },
//   avatar: {
//     width: "64px",
//     height: "64px",
//     marginBottom: "8px",
//   },
//   ratingsContainer: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "8px",
//   },
//   starIcon: {
//     marginRight: "4px",
//   },
//   ellipticalElement: {
//     width: "30px",
//     height: "10px",
//     borderRadius: "50%",
//     backgroundColor: "#ccc",
//     marginTop: "16px",
//   },
//   userinfo: {
//     display: "flex",
//     flexDirection: "row",
//   },
// });

const Profile = () => {
  // const classes = useStyles();

  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "40px" }}
        className="profileContainer"
      >
        <div>
          <Avatar
            alt="User Profile"
            src={"./profile-photo.png"}
            className="avatar"
            sx={{ width: 55, height: 55 }}
          />
        </div>
        <div className="userinfo">
          {" "}
          <Typography
            style={{
              width: "109px",
              height: "15px",
              color: "#FFFFFF",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: " 12px",
              lineHeight: "123.4%",
            }}
            variant="h6"
          >
            Welcome, Username
          </Typography>
          <Typography
            style={{
              color: "#FFFFFF",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "17px",
              lineHeight: "123.4%",
            }}
            variant="h6"
          >
            Aradhana Medical
          </Typography>
          <Typography
            style={{ color: "#FFFFFF", display: "flex", flexDirection: "row" }}
            variant="subtitle2"
          >
            <LocationOnOutlinedIcon
              style={{ color: "#FFFFFF", marginRight: "0px" }}
            />
            Near Hindu Mata ...
          </Typography>
          <div className="ratingsContainer">
            <div className="ratings">
              <StarIcon
                style={{ color: "#FF8B03" }}
                className="starIcon"
              />
              <StarIcon
                style={{ color: "#FF8B03" }}
                className="starIcon"
              />
              <StarIcon
                style={{ color: "#FF8B03" }}
                className="starIcon"
              />
              <StarIcon
                style={{ color: "#FFFFFF" }}
                className="starIcon"
              />
              <StarIcon
                style={{ color: "#FFFFFF" }}
                className="starIcon"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#FFFFFF",
          backgroundColor: " rgba(0, 0, 0, 0.23)",
          width: "190px",
          height: " 25px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "5px 11px",
          gap: "7px",
          left: "calc(50% - 152px/2 + 0.04px)",
          top: "121.01px",
          marginLeft: "50px",
          borderRadius: "17px",
        }}
        className="ellipticalElement"
      >
        Profile 3/5 complete <EditOutlinedIcon />
      </div>
      <Divider style={{ marginTop: "10px" }} />
    </div>
  );
};

export default Profile;
